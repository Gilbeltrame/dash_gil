import { Box, Text, theme } from '@chakra-ui/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18 mar',
    uv: 31,
  },
  {
    name: '19 mar',
    uv: 120,
  },
  {
    name: '20 mar',
    uv: 10,
  },
  {
    name: '21 mar',
    uv: 28,
  },
  {
    name: '22 mar',
    uv: 61,
  },
  {
    name: '23 mar',
    uv: 181,
  },
  {
    name: '24 mar',
    uv: 109,
  },
];

export function ReChart(){
  return(
    <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">
        Taxa de abertura
      </Text>
      <AreaChart
        width={400}
        height={160}
        data={data}              
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={theme.colors.gray[500]} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={theme.colors.blue[500]} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey={"name"} interval={0} height={15}/>
        <YAxis padding={{ top: 10 }} axisLine={false}/>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke={theme.colors.cyan[600]}
          strokeWidth='4'
          fill="url(#colorUv)"
          />
      </AreaChart>
    </Box>
  );
}