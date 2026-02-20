import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="bg-primary w-12 h-12 rounded-[15px] shadow-lg shadow-primary/20 flex items-center justify-center">
                <AppLogoIcon className="block" />
            </div>
        </>
    );
}
