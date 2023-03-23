import { User } from "../entities/user";

export interface DashboardProps {
  users: User[];
  assetsStatusChartData: (string | number)[][];
  assetsHealthscoreChartData: (string | number)[][];
}
