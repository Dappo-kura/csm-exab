import { Purchases, PurchasesOfferings, PurchasesPackage } from '@revenuecat/purchases-capacitor';
import { Capacitor } from '@capacitor/core';
import { saveAppSettings } from './settingsStorage';

// RevenueCat API Key (Android)
// TODO: Replace with your actual RevenueCat Public API Key
const REVENUECAT_API_KEY = 'goog_QytuSfvSOOhzEOHDiFqpswxQJAK';

// Entitlement ID (configured in RevenueCat dashboard)
const ENTITLEMENT_ID = 'premium_access';

export async function initializePurchases() {
    if (Capacitor.getPlatform() === 'web') {
        console.log('Web platform detected: Premium features unlocked for demo');
        saveAppSettings({ isPremium: true });
        return;
    }

    try {
        await Purchases.configure({ apiKey: REVENUECAT_API_KEY });
        await checkSubscriptionStatus(); // 初期化時にステータスを確認
        console.log('Purchases initialized');
    } catch (error) {
        console.error('Purchases initialization failed', error);
    }
}

export async function getAdRemovalPackage(): Promise<PurchasesPackage | null> {
    try {
        const offerings: PurchasesOfferings = await Purchases.getOfferings();
        const currentOffering = offerings.current || offerings.all['default'];

        if (currentOffering && currentOffering.availablePackages.length > 0) {
            return currentOffering.availablePackages[0];
        }
    } catch (error: any) {
        console.error('Failed to get offerings', error);
        // 環境によるエラー（エミュレータ未設定など）をユーザーに分かりやすく表示
        if (error.message.includes('not allowed to make the purchase')) {
            alert('課金情報を取得できませんでした。エミュレータのGoogle Play設定、またはテストアカウントを確認してください。');
        } else {
            alert(`商品情報の取得に失敗しました: ${error.message}`);
        }
    }
    return null;
}

export async function purchaseAdRemoval(pkg: PurchasesPackage): Promise<boolean> {
    try {
        const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg });
        const isPro = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined";

        if (isPro) {
            saveAppSettings({ isPremium: true });
            return true;
        }
    } catch (error: any) {
        if (!error.userCancelled) {
            console.error('Purchase failed', error);
            alert(`Purchase Error: ${error.message}`);
        }
    }
    return false;
}

export async function restorePurchases(): Promise<boolean> {
    try {
        const { customerInfo } = await Purchases.restorePurchases();
        const isPro = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined";

        if (isPro) {
            saveAppSettings({ isPremium: true });
            return true;
        } else {
            // 復元したけど権限がない場合
            // saveAppSettings({ isAdRemoved: false }); // 既存の設定を上書きするかは要検討
            alert('No active subscription found to restore.');
        }
    } catch (error: any) {
        console.error('Restore failed', error);
        alert(`Restore Error: ${error.message}`);
    }
    return false;
}

export async function checkSubscriptionStatus() {
    try {
        const { customerInfo } = await Purchases.getCustomerInfo();
        const isPro = typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined";

        saveAppSettings({ isPremium: isPro });
        return isPro;
    } catch (error) {
        console.error('Failed to check subscription status', error);
        return false;
    }
}
