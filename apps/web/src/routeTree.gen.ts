/* eslint-disable */
// @ts-nocheck
// Generated-compatible route tree kept in git so clean installs can typecheck before Vite regenerates it.
import { Route as rootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'
import { Route as LoginRoute } from './routes/login'
import { Route as AdminRoute } from './routes/admin'
import { Route as InvestorRoute } from './routes/investor'
import { Route as AdminInvestorsRoute } from './routes/admin.investors'
import { Route as AdminInterestRoute } from './routes/admin.interest'
import { Route as AdminTransactionsRoute } from './routes/admin.transactions'
import { Route as AdminExcelUploadRoute } from './routes/admin.excel-upload'
import { Route as AdminReportsRoute } from './routes/admin.reports'
import { Route as AdminSettingsRoute } from './routes/admin.settings'

const Index = IndexRoute.update({ id: '/', path: '/', getParentRoute: () => rootRoute } as any)
const Login = LoginRoute.update({ id: '/login', path: '/login', getParentRoute: () => rootRoute } as any)
const Admin = AdminRoute.update({ id: '/admin', path: '/admin', getParentRoute: () => rootRoute } as any)
const Investor = InvestorRoute.update({ id: '/investor', path: '/investor', getParentRoute: () => rootRoute } as any)
const AdminInvestors = AdminInvestorsRoute.update({ id: '/admin/investors', path: '/admin/investors', getParentRoute: () => rootRoute } as any)
const AdminInterest = AdminInterestRoute.update({ id: '/admin/interest', path: '/admin/interest', getParentRoute: () => rootRoute } as any)
const AdminTransactions = AdminTransactionsRoute.update({ id: '/admin/transactions', path: '/admin/transactions', getParentRoute: () => rootRoute } as any)
const AdminExcelUpload = AdminExcelUploadRoute.update({ id: '/admin/excel-upload', path: '/admin/excel-upload', getParentRoute: () => rootRoute } as any)
const AdminReports = AdminReportsRoute.update({ id: '/admin/reports', path: '/admin/reports', getParentRoute: () => rootRoute } as any)
const AdminSettings = AdminSettingsRoute.update({ id: '/admin/settings', path: '/admin/settings', getParentRoute: () => rootRoute } as any)

export const routeTree = rootRoute._addFileChildren({ Index, Login, Admin, Investor, AdminInvestors, AdminInterest, AdminTransactions, AdminExcelUpload, AdminReports, AdminSettings } as any)
