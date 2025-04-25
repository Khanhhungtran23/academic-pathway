
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    navigate(`/${value === 'dashboard' ? '' : value}`);
  };

  return (
    <div className="dashboard-header flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl md:text-3xl font-bold">Student Course Management System</h1>
        <p className="text-green-50">Plan your academic journey with smart recommendations</p>
      </div>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full md:w-auto">
        <TabsList className="bg-white/20">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Header;
