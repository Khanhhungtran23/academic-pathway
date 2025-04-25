
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Subject } from '@/types';
import { CheckIcon, SearchIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface SubjectTableProps {
  subjects: Subject[];
  title: string;
}

const SubjectTable: React.FC<SubjectTableProps> = ({ subjects, title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Subject>('TenMH');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof Subject) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredSubjects = subjects.filter(subject => 
    subject.TenMH.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.MaMH.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSubjects = [...filteredSubjects].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="p-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-2xl font-semibold green-gradient-text">{title}</h2>
        <div className="relative w-full md:w-64">
          <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4"
          />
        </div>
      </div>
      <div className="border-t">
        <div className="relative w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 font-semibold">
                        Code <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => handleSort('MaMH')}>
                        Sort A-Z {sortField === 'MaMH' && sortDirection === 'asc' && <CheckIcon className="ml-2 h-4 w-4" />}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSort('MaMH')}>
                        Sort Z-A {sortField === 'MaMH' && sortDirection === 'desc' && <CheckIcon className="ml-2 h-4 w-4" />}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableHead>
                <TableHead>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 font-semibold">
                        Subject <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => handleSort('TenMH')}>
                        Sort A-Z {sortField === 'TenMH' && sortDirection === 'asc' && <CheckIcon className="ml-2 h-4 w-4" />}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSort('TenMH')}>
                        Sort Z-A {sortField === 'TenMH' && sortDirection === 'desc' && <CheckIcon className="ml-2 h-4 w-4" />}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableHead>
                <TableHead className="text-center">Credits</TableHead>
                <TableHead className="text-center">B1</TableHead>
                <TableHead className="text-center">K1</TableHead>
                <TableHead className="text-center">T1</TableHead>
                <TableHead className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 font-semibold">
                        Score <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => handleSort('DiemHP')}>
                        Highest first {sortField === 'DiemHP' && sortDirection === 'desc' && <CheckIcon className="ml-2 h-4 w-4" />}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSort('DiemHP')}>
                        Lowest first {sortField === 'DiemHP' && sortDirection === 'asc' && <CheckIcon className="ml-2 h-4 w-4" />}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableHead>
                <TableHead className="text-center">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedSubjects.length > 0 ? (
                sortedSubjects.map((subject) => (
                  <TableRow key={`${subject.MaMH}-${subject.NHHK}`}>
                    <TableCell className="font-medium">{subject.MaMH}</TableCell>
                    <TableCell>{subject.TenMH}</TableCell>
                    <TableCell className="text-center">{subject.SoTinChi}</TableCell>
                    <TableCell className="text-center">{subject.B1 || '-'}</TableCell>
                    <TableCell className="text-center">{subject.K1 || '-'}</TableCell>
                    <TableCell className="text-center">{subject.T1 || '-'}</TableCell>
                    <TableCell className="text-center font-medium">
                      {subject.DiemHP > 0 ? subject.DiemHP : '-'}
                    </TableCell>
                    <TableCell className="text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        subject.DiemChuHP === 'A+' || subject.DiemChuHP === 'A' ? 'bg-green-100 text-green-800' :
                        subject.DiemChuHP === 'B+' || subject.DiemChuHP === 'B' ? 'bg-blue-100 text-blue-800' :
                        subject.DiemChuHP === 'C+' || subject.DiemChuHP === 'C' ? 'bg-yellow-100 text-yellow-800' :
                        subject.DiemChuHP === 'D+' || subject.DiemChuHP === 'D' ? 'bg-orange-100 text-orange-800' :
                        subject.DiemChuHP === 'F' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {subject.DiemChuHP || 'N/A'}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4 text-muted-foreground">
                    No subjects found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SubjectTable;
