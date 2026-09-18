'use client';

import React, { useState } from 'react';
import { 
  LogOut, 
  Layers, 
  Bell, 
  Building2, 
  User as UserIcon,
  ChevronDown,
  Lock,
  Globe,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EducationalTier } from '../../types';

export const Navbar: React.FC<{ onToggleSidebar: () => void }> = ({ onToggleSidebar }) => {
  const { 
    currentUser, 
    logout, 
    activeTier, 
    setActiveTier, 
    settings,
    licenseConfig,
    announcements,
    tenantSchools,
    currentTenantId,
    currentTenant,
    switchTenant,
    setActivePage
  } = useApp();

  const [showSchoolSwitcher, setShowSchoolSwitcher] = useState(false);

  const allTiers: { key: EducationalTier | 'all'; label: string; badge: string; color: string }[] = [
    { key: 'all', label: 'All Tiers', badge: 'Global', color: 'hover:bg-slate-100' },
    { key: 'primary', label: 'Primary', badge: 'Basic 1-6', color: 'hover:bg-amber-50' },
    { key: 'junior_sec', label: 'Junior Sec', badge: 'JSS 1-3', color: 'hover:bg-cyan-50' },
    { key: 'senior_sec', label: 'Senior Sec', badge: 'SSS 1-3', color: 'hover:bg-indigo-50' },
    { key: 'tertiary', label: 'Tertiary', badge: '100L-500L', color: 'hover:bg-blue-50' },
    { key: 'sub_program', label: 'Sub-Programs', badge: 'IJMB/Dipl.', color: 'hover:bg-emerald-50' },
  ];

  // Dynamically filter tiers according to GetoCore Central Admin license
  const availableTiers = allTiers.filter(t => t.key === 'all' || licenseConfig.unlockedTiers.includes(t.key));

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Left: Mobile hamburger & Global School Switcher */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Global School Switcher Trigger Button */}
          <div className="relative">
            <button
              onClick={() => setShowSchoolSwitcher(!showSchoolSwitcher)}
              className="flex items-center space-x-2 bg-slate-900 text-white hover:bg-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs border border-slate-800 group"
              title="Click to switch between subscriber schools worldwide"
            >
              <span className="text-sm">{currentTenant?.flagEmoji || '🇳🇬'}</span>
              <span className="max-w-[130px] sm:max-w-[180px] truncate">
                {currentTenant?.name || settings.schoolName}
              </span>
              <span className="text-[10px] text-emerald-400 font-mono px-1 rounded bg-slate-800">
                {currentTenant?.currencySymbol || settings.currencySymbol}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform ${showSchoolSwitcher ? 'rotate-180' : ''}`} />
            </button>

            {/* School Switcher Dropdown Modal */}
            {showSchoolSwitcher && (
              <>
                <div 
                  onClick={() => setShowSchoolSwitcher(false)} 
                  className="fixed inset-0 z-40"
                />
                <div className="absolute left-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 p-3 space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 px-2">
                    <div className="flex items-center space-x-1.5 text-xs font-black text-slate-800">
                      <Globe className="w-3.5 h-3.5 text-emerald-600" />
                      <span>GetoCore Global Network</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">
                      {tenantSchools.length} Subscriber Schools
                    </span>
                  </div>

                  <div className="max-h-72 overflow-y-auto space-y-1 py-1">
                    {tenantSchools.map((s) => {
                      const isSelected = s.id === currentTenantId;
                      return (
                        <button
                          key={s.id}
                          onClick={() => {
                            switchTenant(s.id);
                            setShowSchoolSwitcher(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5 min-w-0">
                            <span className="text-base shrink-0">{s.flagEmoji}</span>
                            <div className="min-w-0">
                              <div className="font-bold truncate">{s.name}</div>
                              <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                                <span>{s.city}, {s.country}</span>
                                <span>•</span>
                                <span className="font-mono text-emerald-700 font-bold">{s.currencyCode} ({s.currencySymbol})</span>
                              </div>
                            </div>
                          </div>

                          {isSelected ? (
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                          ) : (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono shrink-0 ml-2">
                              {s.stats.totalStudents} std
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-1">
                    <button
                      onClick={() => {
                        setActivePage('getocore_global_hq');
                        setShowSchoolSwitcher(false);
                      }}
                      className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Open GetoCore Command Center</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="hidden sm:flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-xl text-xs text-slate-700 border border-slate-200">
            <Building2 className="w-4 h-4 text-emerald-700" />
            <span className="font-semibold">{settings.currentSession}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">{settings.currentTermOrSemester}</span>
          </div>

          <div className="hidden xl:flex items-center space-x-1 text-[11px] text-slate-400 font-medium pl-1">
            <span>Powered by</span>
            <strong className="text-emerald-800 font-bold">GetoCore Digital Innovation</strong>
          </div>
        </div>

        {/* Center: Educational Tier Switcher Pills (Filtered by Unlocked Wings) */}
        <div className="hidden md:flex items-center bg-slate-100/80 p-1 rounded-2xl border border-slate-200/80 overflow-x-auto max-w-xl">
          {availableTiers.map((t) => {
            const isActive = activeTier === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActiveTier(t.key)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 ' + t.color
                }`}
              >
                <span>{t.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-normal ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-200 text-slate-600'
                }`}>
                  {t.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: GetoCore Global Command Shortcut + Notifications + Profile */}
        <div className="flex items-center space-x-3">
          {/* Quick SaaS Command Shortcut */}
          <button
            onClick={() => setActivePage('getocore_global_hq')}
            className="hidden sm:flex items-center space-x-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3 py-1.5 rounded-xl text-xs font-extrabold shadow-sm transition-all"
            title="Open GetoCore Global SaaS Command Center"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>GetoCore HQ</span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-600 rounded-full ring-2 ring-white"></span>
            </button>
          </div>

          <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

          {/* User Profile Card */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <div className="text-xs font-bold text-slate-800 leading-tight">
                {currentUser?.name || 'Authorized User'}
              </div>
              <div className="text-[11px] font-medium text-emerald-700 capitalize">
                {currentUser?.role.replace('_', ' ')}
              </div>
            </div>

            <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-200 ring-2 ring-emerald-600/20 shrink-0">
              {currentUser?.avatar ? (
                <img src={currentUser.avatar} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-xs text-slate-600">
                  <UserIcon className="w-4 h-4 text-slate-600" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

