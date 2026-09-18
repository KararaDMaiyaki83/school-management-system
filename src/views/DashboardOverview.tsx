'use client';

import React from 'react';
import { 
  Users, 
  BookOpen, 
  Coins, 
  CalendarCheck, 
  GraduationCap, 
  ArrowUpRight, 
  MonitorPlay, 
  HeartHandshake, 
  PlusCircle, 
  FileText, 
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  CreditCard
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DashboardOverview: React.FC = () => {
  const { 
    students, 
    invoices, 
    cbtExams, 
    announcements, 
    activeTier, 
    setActivePage, 
    setActiveTier,
    settings,
    communityPosts 
  } = useApp();

  const filteredStudents = activeTier === 'all' 
    ? students 
    : students.filter(s => s.tier === activeTier);

  const filteredInvoices = activeTier === 'all'
    ? invoices
    : invoices.filter(i => i.tier === activeTier);

  const totalFeesCollected = filteredInvoices.reduce((acc, curr) => acc + curr.amountPaid, 0);
  const totalFeesPending = filteredInvoices.reduce((acc, curr) => acc + curr.balance, 0);

  const avgAttendance = filteredStudents.length > 0
    ? Math.round(filteredStudents.reduce((acc, s) => acc + s.attendanceRate, 0) / filteredStudents.length)
    : 95;

  const tierCounts = {
    primary: students.filter(s => s.tier === 'primary').length,
    junior_sec: students.filter(s => s.tier === 'junior_sec').length,
    senior_sec: students.filter(s => s.tier === 'senior_sec').length,
    tertiary: students.filter(s => s.tier === 'tertiary').length,
    sub_program: students.filter(s => s.tier === 'sub_program').length
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#008751_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Academic Portal Active • {settings.currentSession}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Comprehensive Institutional Command Center
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Managing basic education, junior & senior secondary wings, tertiary faculties, CBT exams, parent oversight, student & alumni network, and ₦ bursary settlements.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-5 flex flex-wrap gap-2.5">
            <button
              onClick={() => setActivePage('students')}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-md shadow-emerald-700/30 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Admit Student</span>
            </button>

            <button
              onClick={() => setActivePage('cbt')}
              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-md shadow-purple-700/30 transition-all"
            >
              <MonitorPlay className="w-4 h-4" />
              <span>Launch CBT Exam</span>
            </button>

            <button
              onClick={() => setActivePage('parent_portal')}
              className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-md shadow-rose-700/30 transition-all"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Parent Monitoring</span>
            </button>

            <button
              onClick={() => setActivePage('community')}
              className="px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-md shadow-violet-700/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Alumni & Student Network</span>
            </button>

            <button
              onClick={() => setActivePage('id_studio')}
              className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-md shadow-amber-700/30 transition-all"
            >
              <CreditCard className="w-4 h-4" />
              <span>Smart ID Studio</span>
            </button>

            <button
              onClick={() => setActivePage('grading')}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center space-x-1.5 border border-slate-700 transition-all"
            >
              <Award className="w-4 h-4" />
              <span>Broadsheet & Grades</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Students */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Enrolled Scholars
            </span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-extrabold text-slate-900">
              {filteredStudents.length} <span className="text-xs font-normal text-slate-500">Students</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 flex items-center space-x-1">
              <span className="text-emerald-600 font-semibold">Active & Registered</span>
            </div>
          </div>
        </div>

        {/* Total Fee Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Tuition Collected (₦)
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Coins className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-extrabold text-slate-900">
              ₦{totalFeesCollected.toLocaleString()}
            </div>
            <div className="text-xs text-rose-600 mt-1 flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>₦{totalFeesPending.toLocaleString()} outstanding</span>
            </div>
          </div>
        </div>

        {/* Community Network Posts */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Alumni & Student Network
            </span>
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-extrabold text-slate-900">
              {communityPosts.length} <span className="text-xs font-normal text-slate-500">Discussions</span>
            </div>
            <div className="text-xs text-violet-700 mt-1 flex items-center space-x-1 font-medium">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Lifelong Alumni Circles Active</span>
            </div>
          </div>
        </div>

        {/* Overall Attendance */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Roll Call Attendance
            </span>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-extrabold text-slate-900">
              {avgAttendance}%
            </div>
            <div className="text-xs text-emerald-600 mt-1 flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Punctuality index verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Tier Breakdown & Distribution */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">Institutional Tier Allocation</h2>
            <p className="text-xs text-slate-500">Enrollment distribution across Nigerian educational structures</p>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
            5 Distinct Wings
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div 
            onClick={() => setActiveTier('primary')}
            className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between text-amber-800 text-xs font-bold mb-1">
              <span>Primary Wing</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div className="text-xl font-extrabold text-slate-900">{tierCounts.primary}</div>
            <div className="text-[11px] text-slate-600 mt-1">Nursery 1-2 & Basic 1-6</div>
          </div>

          <div 
            onClick={() => setActiveTier('junior_sec')}
            className="p-4 rounded-xl border border-cyan-200 bg-cyan-50/40 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between text-cyan-800 text-xs font-bold mb-1">
              <span>Junior Secondary</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div className="text-xl font-extrabold text-slate-900">{tierCounts.junior_sec}</div>
            <div className="text-[11px] text-slate-600 mt-1">JSS 1, 2, 3 (BECE Standard)</div>
          </div>

          <div 
            onClick={() => setActiveTier('senior_sec')}
            className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/40 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between text-indigo-800 text-xs font-bold mb-1">
              <span>Senior Secondary</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div className="text-xl font-extrabold text-slate-900">{tierCounts.senior_sec}</div>
            <div className="text-[11px] text-slate-600 mt-1">SSS 1-3 (Science/Arts/Comm)</div>
          </div>

          <div 
            onClick={() => setActiveTier('tertiary')}
            className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between text-blue-800 text-xs font-bold mb-1">
              <span>Collegiate / Tertiary</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div className="text-xl font-extrabold text-slate-900">{tierCounts.tertiary}</div>
            <div className="text-[11px] text-slate-600 mt-1">100L - 500L (5.0 CGPA)</div>
          </div>

          <div 
            onClick={() => setActiveTier('sub_program')}
            className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between text-emerald-800 text-xs font-bold mb-1">
              <span>Sub-Programs</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div className="text-xl font-extrabold text-slate-900">{tierCounts.sub_program}</div>
            <div className="text-[11px] text-slate-600 mt-1">IJMB, Diplomas & Cohorts</div>
          </div>
        </div>
      </div>

      {/* Two Column Section: Alumni Highlights & CBT Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alumni & Community Spotlight */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Student & Alumni Network Hub</h3>
              </div>
              <button 
                onClick={() => setActivePage('community')}
                className="text-xs text-violet-700 font-semibold hover:underline"
              >
                Open Network →
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Stay connected with alumni across graduating sets, discuss job opportunities, and engage in study circles.
            </p>

            <div className="space-y-2.5">
              {communityPosts.slice(0, 2).map((post) => (
                <div key={post.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-violet-700 uppercase bg-violet-50 px-2 py-0.5 rounded">
                      {post.circle}
                    </span>
                    <span className="text-[10px] text-slate-400">{post.createdAt}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">{post.title}</div>
                  <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Smart ID & Certificate Studio Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Smart Verifiable ID Studio</h3>
              </div>
              <button 
                onClick={() => setActivePage('id_studio')}
                className="text-xs text-amber-700 font-semibold hover:underline"
              >
                Launch Studio →
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Generate biometric PVC Student ID cards, Alumni Lifetime membership credentials, and verifiable digital completion certificates with live QR verification.
            </p>

            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-transparent border border-amber-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Live QR Verification Active</div>
                <div className="text-[11px] text-slate-600 mt-0.5">Scannable validation linked to institutional registry</div>
              </div>
              <button
                onClick={() => setActivePage('id_studio')}
                className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs shadow-xs"
              >
                Generate ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
