'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Award, 
  CalendarCheck, 
  Coins, 
  Bell, 
  Settings, 
  GraduationCap, 
  LogOut,
  MonitorPlay,
  HeartHandshake,
  MessageSquare,
  CreditCard,
  Building2,
  Lock,
  UserCheck,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { activePage, setActivePage, logout, currentUser, settings, licenseConfig } = useApp();

  const navigationSections = [
    {
      title: 'GetoCore Global SaaS HQ',
      items: [
        { id: 'getocore_global_hq', label: 'Global Command Center', icon: Globe, badge: 'Worldwide', office: 'GetoCore HQ' },
        { id: 'getocore_admin', label: 'Central Tier Lock', icon: Lock, badge: 'Master Key', office: 'Licensing Desk' },
      ]
    },
    {
      title: 'Institutional Administration',
      items: [
        { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard, badge: null, office: null },
        { id: 'students', label: 'Student Directory', icon: Users, badge: null, office: 'Admissions' },
        { id: 'classes', label: 'Class Management', icon: Building2, badge: 'Registry', office: 'VP Admin' },
        { id: 'academics', label: 'Subject Curricula', icon: BookOpen, badge: 'Academics', office: 'VP Academics' },
        { id: 'staff', label: 'Staff Management', icon: UserCheck, badge: 'HR / TRCN', office: 'Registrar' },
        { id: 'attendance', label: 'Attendance Register', icon: CalendarCheck, badge: null, office: null },
      ]
    },
    {
      title: 'Finance & Examinations',
      items: [
        { id: 'bursary', label: 'Bursary & Payments', icon: Coins, badge: 'Paystack', office: 'Chief Bursar' },
        { id: 'cbt', label: 'CBT Exam Portal', icon: MonitorPlay, badge: 'Live CBT', office: 'Exam Board' },
        { id: 'grading', label: 'Grading & Transcripts', icon: Award, badge: null, office: 'Academics' },
      ]
    },
    {
      title: 'Community & Credentials',
      items: [
        { id: 'parent_portal', label: 'Parent Monitoring', icon: HeartHandshake, badge: 'Portal', office: null },
        { id: 'community', label: 'Student & Alumni Network', icon: MessageSquare, badge: 'Connect', office: null },
        { id: 'id_studio', label: 'Smart ID & Certificates', icon: CreditCard, badge: 'Unique', office: null },
        { id: 'notices', label: 'Notice Board', icon: Bell, badge: null, office: null },
      ]
    },
    {
      title: 'School Configuration',
      items: [
        { id: 'settings', label: 'School Settings', icon: Settings, badge: null, office: 'Authority' },
      ]
    }
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          onClick={onClose} 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      <aside className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-72 bg-slate-950 text-white flex flex-col border-r border-slate-800 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-0.5 shadow-md shrink-0 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-extrabold text-sm text-white truncate tracking-tight">
              {settings.schoolName}
            </h2>
            <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
              EduSphere ERP
            </p>
          </div>
        </div>

        {/* Current Role Pill */}
        <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-300 truncate capitalize">
              {currentUser?.role.replace('_', ' ')}
            </span>
          </div>
          <span className="text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded border border-slate-700">
            {currentUser?.identifierId || 'PORTAL'}
          </span>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
          {navigationSections.map((sec, secIdx) => (
            <div key={secIdx} className="space-y-1">
              <div className="px-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {sec.title}
              </div>
              {sec.items.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold transition-all group ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <Icon className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-emerald-400'
                      }`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-bold shrink-0 ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : item.id === 'getocore_global_hq'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800/50'
                            : item.id === 'getocore_admin'
                              ? 'bg-rose-950 text-rose-300 border border-rose-800/50'
                              : item.id === 'bursary'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/50'
                                : item.id === 'classes'
                                  ? 'bg-blue-950 text-blue-300 border border-blue-800/50'
                                  : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* User Card & Standalone Signout */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center space-x-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-emerald-900/50 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                {currentUser?.name ? currentUser.name.slice(0, 2).toUpperCase() : 'US'}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-white truncate">{currentUser?.name}</div>
                <div className="text-[10px] text-slate-400 truncate">{currentUser?.email}</div>
              </div>
            </div>

            <button
              onClick={logout}
              title="Sign Out to Standalone Login"
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 rounded-lg transition-colors ml-1"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          {/* GetoCore Digital Innovation Attribution */}
          <div className="mt-2 text-center text-[10px] text-slate-500 font-medium">
            <span>Powered by </span>
            <strong className="text-emerald-400">GetoCore Digital Innovation</strong>
          </div>
        </div>
      </aside>
    </>
  );
};
