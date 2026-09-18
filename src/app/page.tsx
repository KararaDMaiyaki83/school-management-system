'use client';

import React from 'react';
import { useApp, AppProvider } from '../context/AppContext';
import { LoginPage } from '../views/auth/LoginPage';
import { AppLayout } from '../components/layout/AppLayout';
import { DashboardOverview } from '../views/DashboardOverview';
import { StudentsPage } from '../views/students/StudentsPage';
import { ClassManagementPage } from '../views/classes/ClassManagementPage';
import { AcademicsPage } from '../views/academics/AcademicsPage';
import { StaffManagementPage } from '../views/staff/StaffManagementPage';
import { CBTExamPage } from '../views/cbt/CBTExamPage';
import { GradingPage } from '../views/grading/GradingPage';
import { ParentPortalPage } from '../views/parent/ParentPortalPage';
import { CommunityPage } from '../views/community/CommunityPage';
import { DigitalIDStudioPage } from '../views/idcards/DigitalIDStudioPage';
import { AttendancePage } from '../views/attendance/AttendancePage';
import { FeesBursaryPage } from '../views/bursary/FeesBursaryPage';
import { NoticeBoardPage } from '../views/notices/NoticeBoardPage';
import { SettingsPage } from '../views/settings/SettingsPage';
import { GetoCoreAdminLockPage } from '../views/admin/GetoCoreAdminLockPage';
import { GetoCoreGlobalCommandCenter } from '../views/admin/GetoCoreGlobalCommandCenter';

function AppContent() {
  const { currentUser, activePage } = useApp();

  // STANDALONE LOGIN / SIGN-IN VIEW
  // Isolated, distraction-free authentication experience without dashboard frame
  if (!currentUser) {
    return <LoginPage />;
  }

  // AUTHENTICATED DASHBOARD APPLICATION
  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <DashboardOverview />;
      case 'students':
        return <StudentsPage />;
      case 'classes':
        return <ClassManagementPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'staff':
        return <StaffManagementPage />;
      case 'cbt':
        return <CBTExamPage />;
      case 'grading':
        return <GradingPage />;
      case 'parent_portal':
        return <ParentPortalPage />;
      case 'community':
        return <CommunityPage />;
      case 'id_studio':
        return <DigitalIDStudioPage />;
      case 'attendance':
        return <AttendancePage />;
      case 'bursary':
        return <FeesBursaryPage />;
      case 'notices':
        return <NoticeBoardPage />;
      case 'settings':
        return <SettingsPage />;
      case 'getocore_admin':
        return <GetoCoreAdminLockPage />;
      case 'getocore_global_hq':
        return <GetoCoreGlobalCommandCenter />;
      default:
        return <DashboardOverview />;
    }
  };

  return <AppLayout>{renderPage()}</AppLayout>;
}

export default function Home() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
