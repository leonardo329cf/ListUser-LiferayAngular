import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";

import LiferayParams from "../types/LiferayParams";
import User from "../types/User";
import { requestUsers } from "../util/requests";

declare const Liferay: any;

@Component({
  templateUrl:
    Liferay.ThemeDisplay.getPathContext() +
    "/o/angular12/app/app.component.html",
})
export class AppComponent {
  params: LiferayParams;
  labels: any;
  users: User[];

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.labels = {
      configuration: "Configuration",

      portletNamespace: "Portlet Namespace",
      contextPath: "Context Path",
      portletElementId: "Portlet Element Id",
    };

	const setUsers = (users:User[]) => {
		  this.users=users;
	}
	requestUsers(http, setUsers); 
  }

  

  get configurationJSON() {
    return JSON.stringify(this.params.configuration, null, 2);
  }
}
