'use client';
import React from 'react';
import { useApp, AppProvider } from './context/AppContext';
import { LoginPage } from './views/auth/LoginPage';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardOverview } from './views/DashboardOverview';
import { StudentsPage } from './views/students/StudentsPage';
import { AcademicsPage } from './views/academics/AcademicsPage';
import { CBTExamPage } from './views/cbt/CBTExamPage';
import { GradingPage } from './views/grading/GradingPage';
import { ParentPortalPage } from './views/parent/ParentPortalPage';
import { AttendancePage } from './views/attendance/AttendancePage';
import { FeesBursaryPage } from './views/bursary/FeesBursaryPage';
import { NoticeBoardPage } from './views/notices/NoticeBoardPage';
import { SettingsPage } from './views/settings/SettingsPage';

const AppContent: React.FC = () => {
  const { currentUser, activePage } = useApp();

  // STANDALONE LOGIN / SIGN-IN VIEW
  // Completely isolated from dashboard shell, sidebars, and navbars
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
      case 'academics':
        return <AcademicsPage />;
      case 'cbt':
        return <CBTExamPage />;
      case 'grading':
        return <GradingPage />;
      case 'parent_portal':
        return <ParentPortalPage />;
      case 'attendance':
        return <AttendancePage />;
      case 'bursary':
        return <FeesBursaryPage />;
      case 'notices':
        return <NoticeBoardPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardOverview />;
    }
  };

  return <AppLayout>{renderPage()}</AppLayout>;
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
