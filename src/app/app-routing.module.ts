import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { FullContentLayoutComponent } from "./layouts/full-content-layout/full-content-layout.component";
import { AuthGuard } from "./Core/guards";

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadChildren: () =>
          import(`./Modules/dashboard/dashboard.module`).then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "messaging",
        loadChildren: () =>
          import(`./Modules/messaging/messaging.module`).then(
            (m) => m.MessagingModule
          ),
      },
      {
        path: "properties",
        loadChildren: () =>
          import(`./Modules/propeties/propeties.module`).then(
            (m) => m.PropetiesModule
          ),
      },
    ],
  },
  {
    path: "auth",
    component: FullContentLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import(`./Modules/auth/auth.module`).then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    [RouterModule.forRoot(routes, { useHash: true })],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
