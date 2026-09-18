'use client';
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Lock, 
  User as UserIcon, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Award, 
  Coins, 
  MonitorPlay,
  HeartHandshake,
  Globe
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ForgotPasswordModal } from './ForgotPasswordModal';

export const LoginPage: React.FC = () => {
  const { login, settings } = useApp();
  const [identifier, setIdentifier] = useState('central.admin@getocore.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [selectedDemoRole, setSelectedDemoRole] = useState<string>('usr_getocore_admin');
  const [errorMessage, setErrorMessage] = useState('');

  const administrativeAccounts = [
    {
      id: 'usr_getocore_admin',
      roleName: 'GetoCore Central Admin',
      sub: 'Global HQ & Multi-School Licensing',
      icon: Globe,
      color: 'bg-gradient-to-r from-emerald-800 to-teal-800 text-white hover:from-emerald-700 hover:to-teal-700 ring-1 ring-emerald-500/40',
      email: 'central.admin@getocore.com'
    },
    {
      id: 'usr_admin',
      roleName: 'School Super Admin',
      sub: 'Principal & Institutional Setup',
      icon: ShieldCheck,
      color: 'bg-emerald-700 text-white hover:bg-emerald-800',
      email: 'admin@apexroyal.edu.ng'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMessage('Please enter your email, Staff ID, or Matric Number.');
      return;
    }
    setErrorMessage('');
    const success = login(identifier.trim());
    if (!success) {
      setErrorMessage('Invalid credentials or unregistered account. Only GetoCore Central Admin, School Super Admins, and officially enrolled school personnel can sign in.');
    }
  };

  const handleQuickLogin = (adminId: string, email: string) => {
    setSelectedDemoRole(adminId);
    setIdentifier(email);
    setErrorMessage('');
    login(adminId);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Left Column: Educational Branding & Nigerian Academic Showcase */}
      <div className="lg:w-7/12 relative flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
        {/* Subtle Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#008751_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none"></div>

        {/* Top Header & Crest */}
        <div className="relative z-10">
          <div className="flex items-center space-x-3.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-0.5 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-700/50 flex items-center space-x-1">
                  <span>Powered by GetoCore</span>
                </span>
                <span className="text-xs text-slate-400">NERDC & NUC Aligned</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
                EduSphere ERP
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
            Unified multi-tier educational operating system engineered for Nigerian basic, secondary, collegiate, and specialized institutions.
          </p>
        </div>

        {/* Middle: Educational Tier Cards Grid */}
        <div className="relative z-10 my-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center space-x-2.5 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <h3 className="font-bold text-slate-100 text-sm">Primary Education</h3>
            </div>
            <p className="text-xs text-slate-400">Nursery 1-2 & Basic 1-6, Psychomotor evaluation, termly broadsheets & pupil cards.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center space-x-2.5 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <h3 className="font-bold text-slate-100 text-sm">Junior Secondary (JSS 1-3)</h3>
            </div>
            <p className="text-xs text-slate-400">NERDC Curriculum, Basic Science & Tech, Continuous Assessment (CA) and BECE prep.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center space-x-2.5 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
              <h3 className="font-bold text-slate-100 text-sm">Senior Secondary (SSS 1-3)</h3>
            </div>
            <p className="text-xs text-slate-400">Science, Arts, & Commercial streams, WAEC/NECO standard grading (A1–F9) & CBT mock exams.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center space-x-2.5 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h3 className="font-bold text-slate-100 text-sm">Tertiary & Sub-Programs</h3>
            </div>
            <p className="text-xs text-slate-400">Colleges & Universities, 100L-500L, 5.0 CGPA transcript engine, plus IJMB/JUPEB & Diplomas.</p>
          </div>
        </div>

        {/* Bottom Feature Badges & Current Session */}
        <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>CBT Test Engine</span>
            </span>
            <span className="flex items-center space-x-1.5 text-rose-400">
              <HeartHandshake className="w-4 h-4" />
              <span>Parent Monitoring</span>
            </span>
            <span className="flex items-center space-x-1.5 text-amber-400">
              <Coins className="w-4 h-4" />
              <span>Naira (₦) Bursary</span>
            </span>
          </div>

          <div className="bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-700/60 text-slate-300">
            Session: <strong className="text-white">{settings.currentSession}</strong> ({settings.currentTermOrSemester})
          </div>
        </div>
      </div>

      {/* Right Column: Standalone Authentication Card & Quick Logins */}
      <div className="lg:w-5/12 bg-white flex flex-col justify-center p-6 sm:p-10 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md mx-auto">
          {/* Institution Sub-header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 mb-3 border border-emerald-100">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Institutional Sign In</h2>
            <p className="text-xs text-slate-500 mt-1">
              Access your administrative, faculty, parent, or student workspace
            </p>
          </div>

          {/* Authorized Administrative Access */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 mr-1.5" />
                Administrative Access Only
              </span>
              <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-md">
                School Onboarding
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {administrativeAccounts.map((acc) => {
                const Icon = acc.icon;
                const isSelected = selectedDemoRole === acc.id;
                return (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => handleQuickLogin(acc.id, acc.email)}
                    className={`flex items-center p-3 rounded-xl border text-left transition-all ${
                      isSelected 
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600' 
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mr-2.5 ${acc.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-900 truncate">{acc.roleName}</div>
                      <div className="text-[10px] text-slate-500 truncate">{acc.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* School Onboarding Notice */}
            <div className="mt-3 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 flex items-start space-x-2">
              <Lock className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                Standard student, parent, and teacher demo logins have been closed. School Super Admins create and issue login credentials for their staff, teachers, and enrolled students.
              </span>
            </div>
          </div>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-medium">Or enter credentials</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email / Staff ID / Matric No / Parent Phone
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="admin@apexroyal.edu.ng or SSS/25/089"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Access Password or PIN
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center space-x-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-slate-300 text-emerald-700 focus:ring-emerald-600 w-4 h-4"
                />
                <span>Keep me signed in on this computer</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md shadow-emerald-700/25 flex items-center justify-center space-x-2 transition-all group"
            >
              <span>Authenticate & Enter Portal</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Footer Assistance & GetoCore Attribution */}
          <div className="mt-8 text-center pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-400">
              Need technical support or student admissions clearance?
            </p>
            <p className="text-xs font-semibold text-slate-700 mt-1">
              ICT Support Desk: +234 803 555 0199 | support@apexroyal.edu.ng
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center space-x-1 text-xs text-slate-500">
              <span>Powered by</span>
              <strong className="text-emerald-800 font-extrabold tracking-tight">GetoCore Digital Innovation</strong>
            </div>
          </div>
        </div>
      </div>

      <ForgotPasswordModal 
        isOpen={showForgotModal} 
        onClose={() => setShowForgotModal(false)} 
      />
    </div>
  );
};
