import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import AppLogo from '@/components/app-logo';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <>
            <Head title="Log in" />

            <div className="min-h-screen flex items-center justify-center p-4" dir="rtl">
                {/* البطاقة الرئيسية */}
                <div className="bg-[#F4F4F4] w-[500px] min-h-[550px] rounded-3xl shadow-2xl border border-slate-200 p-12 text-center">
            
                    {/* الأيقونة العلوية */}
                    <div className="flex justify-center mt-1 mb-6">
                        <AppLogo />
                    </div>
            
                    {/* العناوين */}
                    <h1 className="text-xl font-bold text-slate-800">نظام الحصيف</h1>
                    <p className="text-slate-400 mb-5">مرحباً بك مجدداً في النظام</p>
                    
                    <Form
                        {...store.form()}
                        resetOnSuccess={['password']}
                        className=""
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="w-80 flex flex-col mx-auto space-y-5">

                                    <div>
                                        <div className="text-right">
                                            <label htmlFor="email" className="text-slate-700 font-bold mr-1 text-sm">البريد الإلكتروني</label>
                                        </div>
                                        <div className="relative">
                                        <input 
                                            id="email"
                                            type="email" 
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                            className="w-[100%] bg-[#e5e5f4] border-none rounded-2xl py-[11px] px-5 text-slate-500 placeholder-slate-400 focus:ring-2 focus:ring-primary outline-none"
                                        />                                        
                                        <span className="absolute inset-y-0 left-6 flex items-center text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                        </div>
                                    </div>
                                    <InputError message={errors.email} />


                                    {/* حقل كلمة المرور */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-slate-700 font-bold text-sm">كلمة المرور</label>
                                        {canResetPassword && (
                                                <TextLink
                                                    href={request()}
                                                    className="text-primary text-xs font-semibold hover:underline no-underline"
                                                    tabIndex={5}
                                                >
                                                    هل نسيت كلمة المرور؟
                                                </TextLink>
                                        )}

                                        </div>
                                        <div className="relative">
                                        <input 
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="••••••••"
                                            className="w-[100%] bg-[#e5e5f4] border-none rounded-2xl py-[11px] px-5 text-slate-500 placeholder-slate-400 focus:ring-2 focus:ring-indigo-400 outline-none"
                                        />
                                        <span className="absolute inset-y-0 left-6 flex items-center text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />
                                            </svg>
                                        </span>
                                        </div>
                                    </div>
                                    <InputError message={errors.password} />

                                    {/* تذكرني */}
                                    <div className="flex items-center justify-start px-2 space-x-2">
                                        <Checkbox 
                                            id="remember"
                                            name="remember"
                                            tabIndex={3}
                                            className="border-gray-300"
                                        />

                                        <label className="text-slate-700 text-sm">تذكرني على هذا الجهاز</label>
                                    </div>

                                    {/* زر تسجيل الدخول */}
                                    <Button type="submit"
                                        tabIndex={4}
                                        disabled={processing}
                                        data-test="login-button"
                                        className="w-full bg-[#6366f1] hover:bg-indigo-700 text-white font-bold h-13 rounded-2xl shadow-lg transition duration-300 text-lg"
                                    >
                                        تسجيل الدخول
                                    </Button>

                                </div>

                                
                                {/* الدعم الفني */}
                                <p className="mt-7 text-slate-700 text-sm">
                                تواجه مشكلة في الدخول؟

                                <a href="#" className="font-bold text-indigo-600 hover:underline"> تواصل مع مركز الدعم</a>
                                </p>
                            </>
                        )}
                    </Form>

                    {status && (
                        <div className="mb-4 text-center text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
