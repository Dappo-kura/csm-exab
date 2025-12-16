import { AdMob, AdOptions } from '@capacitor-community/admob';
import { getAppSettings } from './settingsStorage';

// Test ID for Android Interstitial
// 本番リリース時は自身のAdUnitIDに置き換える必要があります
const ADMOB_AD_UNIT_ID = 'ca-app-pub-3940256099942544/1033173712';

export async function initializeAdMob() {
    try {
        await AdMob.initialize({
            testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'], // 必要に応じてデバイスIDを追加
            initializeForTesting: true,
        });
        console.log('AdMob initialized');
    } catch (error) {
        console.error('AdMob initialization failed', error);
    }
}

export async function showInterstitialAd(): Promise<boolean> {
    // プレミアムユーザーなら何もしない
    const settings = getAppSettings();
    if (settings.isPremium) {
        return true;
    }

    try {
        const options: AdOptions = {
            adId: ADMOB_AD_UNIT_ID,
            isTesting: true,
        };

        await AdMob.prepareInterstitial(options);
        await AdMob.showInterstitial();
        return true;
    } catch (error: any) {
        console.error('Failed to show interstitial ad', error);
        return false;
    }
}
