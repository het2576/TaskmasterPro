import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import { useTodoStore } from '../store/todo-store';
import { motion } from 'framer-motion';
import { colors } from '../lib/colors';

export const Stats: React.FC = () => {
  const stats = useTodoStore((state) => state.getStats());

  // Filter out categories with zero count
  const priorityData = Object.entries(stats.byPriority)
    .filter(([_, value]) => value > 0)
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
    }));

  // Filter out categories with zero count
  const categoryData = Object.entries(stats.byCategory)
    .filter(([_, value]) => value > 0)
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
    }));

  const weeklyData = stats.weeklyProgress.map((value, index) => ({
    name: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index],
    value: value || 0, // Convert undefined to 0
  }));

  const CHART_COLORS = {
    priority: [
      colors.priority.low,
      colors.priority.medium,
      colors.priority.high,
    ],
    category: [
      colors.category.work,
      colors.category.personal,
      colors.category.shopping,
      colors.category.health,
      colors.category.other,
    ],
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded">
          <p className="font-medium">{`${label}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value, percent }: any) => {
    if (percent < 0.1) return null; // Don't show label if segment is less than 10%
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="#000000" 
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${name} (${value})`}
      </text>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
    >
      <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: colors.text.primary }}>Quick Stats</h3>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="p-3 md:p-4 rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
               style={{ backgroundColor: colors.mint }}>
            <p style={{ color: colors.text.secondary }} className="text-xs md:text-sm font-medium">Total Tasks</p>
            <p className="text-xl md:text-2xl font-bold" style={{ color: colors.text.primary }}>{stats.total || 0}</p>
          </div>
          <div className="p-3 md:p-4 rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
               style={{ backgroundColor: colors.sage }}>
            <p style={{ color: colors.text.secondary }} className="text-xs md:text-sm font-medium">Completed Today</p>
            <p className="text-xl md:text-2xl font-bold" style={{ color: colors.text.primary }}>
              {stats.todayCompleted || 0}
            </p>
          </div>
          <div className="p-3 md:p-4 rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
               style={{ backgroundColor: colors.pastelYellow }}>
            <p style={{ color: colors.text.secondary }} className="text-xs md:text-sm font-medium">Completion Rate</p>
            <p className="text-xl md:text-2xl font-bold" style={{ color: colors.text.primary }}>
              {stats.completionRate ? `${stats.completionRate.toFixed(1)}%` : '0%'}
            </p>
          </div>
          <div className="p-3 md:p-4 rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
               style={{ backgroundColor: colors.peach }}>
            <p style={{ color: colors.text.secondary }} className="text-xs md:text-sm font-medium">Active Tasks</p>
            <p className="text-xl md:text-2xl font-bold" style={{ color: colors.text.primary }}>{stats.active || 0}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: colors.text.primary }}>Weekly Progress</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <XAxis 
                dataKey="name" 
                stroke={colors.text.secondary}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke={colors.text.secondary}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke={colors.background.accent}
                strokeWidth={2}
                dot={{ 
                  fill: colors.background.accent,
                  strokeWidth: 2,
                  r: 4,
                  stroke: 'black'
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {priorityData.length > 0 && (
        <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: colors.text.primary }}>Tasks by Priority</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={priorityData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                <XAxis 
                  dataKey="name" 
                  stroke={colors.text.secondary}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  stroke={colors.text.secondary}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {priorityData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={CHART_COLORS.priority[index]}
                      stroke="black"
                      strokeWidth={2}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {categoryData.length > 0 && (
        <div className="bg-white p-4 md:p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: colors.text.primary }}>Tasks by Category</h3>
          <div className="h-[250px] md:h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={window.innerWidth < 768 ? 30 : 40}
                  outerRadius={window.innerWidth < 768 ? 60 : 80}
                  dataKey="value"
                  label={renderCustomizedLabel}
                  labelLine={false}
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={CHART_COLORS.category[index]}
                      stroke="black"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{
                    fontSize: '12px',
                    paddingTop: '10px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </motion.div>
  );
};