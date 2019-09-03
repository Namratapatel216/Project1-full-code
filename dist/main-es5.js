(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event/admin-event/admin-event.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event/admin-event/admin-event.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n        </div>\n\n        <!-- Brand\n        <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n\n        <!-- Toggler/collapsibe Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <!-- Navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n            <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n                <li class=\"nav-item\" *ngIf=\"M_P_UserType === 'admin'\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"all_users()\">User List</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Hii {{UserName}}</a>\n\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"edit_profile()\">Edit Profile</a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"change_password()\">Change Password</a>\n                    </div>\n\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\">Log Out</a>\n                </li> \n            </ul>\n        </div> \n    </div>\n</nav>\n\n<div class=\"container\">\n    <h3>ALL Users</h3>\n    <ul class=\"list-group\" >\n        <li class=\"list-group-item\" *ngFor=\"let all_user_data of get_user_list\"><a href=\"javascript:void(0);\" [routerLink]=\"['/per-user',all_user_data['userId']]\">{{all_user_data['firstName']}} {{all_user_data['lastName']}}</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event/particular-user-event/particular-user-event.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event/particular-user-event/particular-user-event.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n    </div>\n\n    <!-- Brand\n        <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n\n    <!-- Toggler/collapsibe Button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <!-- Navbar links -->\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n        <li class=\"nav-item\" *ngIf=\"M_P_UserType === 'admin'\">\n          <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"all_users()\">User List</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\"\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Hii {{UserName}}</a>\n\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"edit_profile()\">Edit Profile</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"change_password()\">Change Password</a>\n          </div>\n\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\">Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid calendar_header\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <button class=\"btn btn-primary\" (click)=\"decrement()\" [disabled]=\"prevBtnDisabled\">\n          << </button> <button class=\"btn btn-outline-secondary\" (click)=\"today()\">Today\n        </button>\n        <button class=\"btn btn-primary\" (click)=\"increment()\" [disabled]=\"nextBtnDisabled\">\n          >>\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div class=\"btn btn-primary\" (click)=\"changeView('month')\" [class.active]=\"view === 'month'\">\n          Month\n        </div>\n        <div class=\"btn btn-primary\" (click)=\"changeView('week')\" [class.active]=\"view === 'week'\">\n          Week\n        </div>\n        <div class=\"btn btn-primary\" (click)=\"changeView('day')\" [class.active]=\"view === 'day'\">\n          Day\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--  <br />\n              \n              <div [ngSwitch]=\"view\">\n                <mwl-calendar-month-view\n                  *ngSwitchCase=\"'month'\"\n                  [viewDate]=\"viewDate\"\n                  [events]=\"events\"\n                  (beforeViewRender)=\"beforeMonthViewRender($event)\"\n                >\n                </mwl-calendar-month-view>\n                <mwl-calendar-week-view\n                  *ngSwitchCase=\"'week'\"\n                  [viewDate]=\"viewDate\"\n                  [events]=\"events\"\n                >\n                </mwl-calendar-week-view>\n                <mwl-calendar-day-view\n                  *ngSwitchCase=\"'day'\"\n                  [viewDate]=\"viewDate\"\n                  [events]=\"events\"\n                >\n                </mwl-calendar-day-view>\n              </div>\n            </div> -->\n\n\n  <br />\n  <div [ngSwitch]=\"view\">\n    <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\"\n      [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"\n      [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-day-view>\n  </div>\n\n  <!-- Everything you see below is just for the demo, you don't need to include it in your app -->\n\n  <br /><br /><br />\n\n  <h3 *ngIf=\"M_P_UserType === 'admin'\">\n\n    <button id=\"add_new_btn\" class=\"btn btn-primary pull-right\" (click)=\"addEvent_form()\">\n      Add new\n    </button>\n    <div class=\"clearfix\"></div>\n  </h3>\n\n  <ng-template class=\"modal-content\" id=\"uploadedImagePopup\" #modalContent_form let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Create Meeting</h5>\n      <button type=\"button\" id=\"create_close_btn\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <div class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Created By</label>\n            <input type=\"text\" name=\"created_by\" [(ngModel)]=\"UserName\" #creted_by=\"ngModel\" id=\"created_by\" disabled\n              class=\"form-control\" id=\"exampleInputEm ail1\" aria-describedby=\"emailHelp\">\n          </div>\n\n          <input type=\"hidden\" ng-value=\"selected_userId\" name=\"created_for\" [(ngModel)]=\"selected_userId\"\n            #creted_for=\"ngModel\" id=\"created_for\">\n\n        <form #create_meeting=\"ngForm\" (ngSubmit)=\"create_meeting_form(); create_meeting.reset();\">\n\n          \n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Purpose</label>\n            <input type=\"text\" name=\"meeting_purpose\" [(ngModel)]=\"meeting_purpose\" #meting_purpose=\"ngModel\"\n              id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Place</label>\n            <input type=\"text\" name=\"meeting_place\" [(ngModel)]=\"meeting_place\" #meting_place=\"ngModel\"\n              id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Start Date & Time</label>\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" bsDaterangepicker [(ngModel)]=\"meeting_date\" #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\"  [(ngModel)]=\"meeting_date\" bsDatepicker #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n\n            <!-- <input datetime-picker  class=\"form-control\" ng-model=\"model\" /> -->\n            <ngx-datetime-picker name=\"meeting_date\" [(ngModel)]=\"meeting_date\"\n              [disableButton]=\"false\" [min]=\"small_calendar_minDate\" [max]=\"maxDate\"\n              [(selectedDateTime)]=\"dateTimeExample\" [use24HourClock]=\"true\" [doNotCloseOnDateSet]=\"true\">\n            </ngx-datetime-picker>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting End Date & Time</label>\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" bsDaterangepicker [(ngModel)]=\"meeting_date\" #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\"  [(ngModel)]=\"meeting_date\" bsDatepicker #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n\n            <!-- <input datetime-picker  class=\"form-control\" ng-model=\"model\" /> -->\n            <ngx-datetime-picker name=\"meeting_end_date\" [(ngModel)]=\"meeting_end_date\"\n              [disableButton]=\"false\" [min]=\"small_calendar_minDate\" [max]=\"maxDate\"\n              [(selectedDateTime)]=\"dateTimeExample2\" [use24HourClock]=\"true\" [doNotCloseOnDateSet]=\"true\">\n            </ngx-datetime-picker>\n          </div>\n\n          <button type=\"submit\" class=\"btn btn_width\">Create Meeting</button>\n\n        </form>\n      </div>\n\n    </div>\n\n  </ng-template>\n\n  <ng-template #View_meeting_data let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Meeting Schedule</h5>\n      <button type=\"button\" id=\"create_close_btn\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <div class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n\n        <form #view_meeting_form=\"ngForm\">\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Purpose </label>\n            <input type=\"text\" name=\"meeting_purpose\" [(ngModel)]=\"modalData?.event.title\" #meting_purpose=\"ngModel\"\n              id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" ng-disabled=\"true\" readonly=\"readonly\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Place</label>\n            <input type=\"text\" name=\"meeting_place\" [(ngModel)]=\"modalData?.event.meeting_place\" #meting_place=\"ngModel\"\n              id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" readonly=\"readonly\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Date & Time</label>\n            <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" [(ngModel)]=modalData?.event.start #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\" readonly=\"readonly\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting End Date & Time</label>\n            <input type=\"text\" id=\"meeting_end_date\" name=\"meeting_end_date\" [(ngModel)]=modalData?.event.end  #meting_end_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\" readonly=\"readonly\">\n          </div>\n\n          <input type=\"hidden\" date='dd-MM-yyyy' ng-value=\"selected_userId\" name=\"created_for\" [(ngModel)]=\"selected_userId\"\n            #creted_for=\"ngModel\" id=\"created_for\">\n\n        </form>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #update_meeting_form let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Change Meeting Schedule</h5>\n      <button type=\"button\" id=\"update_close_btn\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <div class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n\n        <form #view_meeting_form=\"ngForm\" (ngSubmit)=\"Update_meeting()\">\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Created By</label>\n            <input type=\"text\" name=\"created_by\" [(ngModel)]=\"UserName\" #creted_by=\"ngModel\" id=\"created_by\"\n              class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" readonly=\"readonly\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Purpose</label>\n            <input type=\"text\" name=\"meeting_purpose\" [(ngModel)]=\"update_meetings.title\" #meting_purpose=\"ngModel\"\n              id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Place</label>\n            <input type=\"text\" name=\"meeting_place\" [(ngModel)]=\"update_meetings.meeting_place\" #meting_place=\"ngModel\"\n              id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Start Date & Time</label>\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" bsDaterangepicker [(ngModel)]=\"meeting_date\" #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n            <!--<input type=\"text\" id=\"meeting_date\" name=\"meeting_date\"  [(ngModel)]=update_meetings.start bsDatepicker #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\" > -->\n\n            <ngx-datetime-picker  name=\"meeting_date\" [(ngModel)]=\"update_meetings.start\"\n              [disableButton]=\"false\" [min]=\"small_calendar_minDate\" [max]=\"maxDate\"\n              [(selectedDateTime)]=\"update_meetings.start\" [use24HourClock]=\"true\" [doNotCloseOnDateSet]=\"true\">\n            </ngx-datetime-picker>\n\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting End Date & Time</label>\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" bsDaterangepicker [(ngModel)]=\"meeting_date\" #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n            <!--<input type=\"text\" id=\"meeting_date\" name=\"meeting_date\"  [(ngModel)]=update_meetings.start bsDatepicker #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\" > -->\n\n            <ngx-datetime-picker name=\"meeting_end_date\" [(ngModel)]=\"update_meetings.end\"\n              [disableButton]=\"false\" [min]=\"small_calendar_minDate\" [max]=\"maxDate\"\n              [(selectedDateTime)]=\"update_meetings.end\" [use24HourClock]=\"true\" [doNotCloseOnDateSet]=\"true\">\n            </ngx-datetime-picker>\n\n\n          </div>\n\n          <input type=\"hidden\" ng-value=\"selected_userId\" name=\"created_for\" [(ngModel)]=\"selected_userId\"\n            #creted_for=\"ngModel\" id=\"created_for\">\n\n          <input type=\"hidden\" ng-value=\"update_meetings.eventId\" name=\"eventId\" [(ngModel)]=\"update_meetings.eventId\"\n            #creted_for=\"ngModel\" id=\"eventId\">\n\n          <button type=\"submit\" class=\"btn btn_width\">Change Meeting Schedule</button>\n\n        </form>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #delete_confirm let-close=\"close\">\n    <div class=\"modal-header\">\n      <button type=\"button\" id=\"delete_close_btn\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body text-center\">\n      <p>Are you sure you want to delete meeting schedule?</p>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm_delete(modalData?.event.eventId)\">Yes</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm_decline()\">No</button>\n    </div>\n  </ng-template>\n\n\n  <ng-template #alert_creation_module let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Meeting is Schduled by Admin on {{show_module_create_data.meeting_start_date}}</h5>\n      <button type=\"button\" id=\"create_close_btn\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <!-- {{ modalData?.event | json }} -->\n      <div class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n\n        <form #view_meeting_form=\"ngForm\">\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Purpose</label>\n            <input type=\"text\" name=\"meeting_purpose\" [(ngModel)]=\"show_module_create_data.meeting_purpose\"\n              #meting_purpose=\"ngModel\" id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\"\n              aria-describedby=\"emailHelp\" disabled>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Place</label>\n            <input type=\"text\" name=\"meeting_place\" [(ngModel)]=\"show_module_create_data.meeting_place\"\n              #meting_place=\"ngModel\" id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\"\n              aria-describedby=\"emailHelp\" disabled>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Start Date & Time</label>\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" bsDaterangepicker [(ngModel)]=\"meeting_date\" #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n            <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\"\n              [(ngModel)]=\"show_module_create_data.meeting_start_date\" #meting_date=\"ngModel\"\n              class=\"form-control\" aria-describedby=\"emailHelp\" readonly=\"readonly\"> \n              <!-- <ngx-datetime-picker  name=\"meeting_date\" [(ngModel)]=\"show_module_create_data.meeting_end_date\"\n              [disableButton]=\"false\" [min]=\"small_calendar_minDate\" [max]=\"maxDate\"\n              [(selectedDateTime)]=\"\" [use24HourClock]=\"true\" [doNotCloseOnDateSet]=\"true\" [disableInput]=\"true\">\n            </ngx-datetime-picker> -->\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting End Date & Time</label>\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" bsDaterangepicker [(ngModel)]=\"meeting_date\" #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n            <input type=\"text\" id=\"meeting_date\" name=\"meeting_end_date\"\n              [(ngModel)]=\"show_module_create_data.meeting_end_date\"  #meting_date=\"ngModel\"\n              class=\"form-control\" aria-describedby=\"emailHelp\" readonly=\"readonly\">\n              <!-- <ngx-datetime-picker  name=\"meeting_end_date\" [(ngModel)]=\"show_module_create_data.meeting_end_date\"\n              [disableButton]=\"false\" [min]=\"small_calendar_minDate\" [max]=\"maxDate\"\n              [(selectedDateTime)]=\"show_module_create_data.meeting_end_date\" [use24HourClock]=\"true\" [disableInput]=\"true\">\n              </ngx-datetime-picker> -->\n\n          </div>\n\n          <input type=\"hidden\" ng-value=\"ODIon6zoA\" name=\"created_for\" [(ngModel)]=\"selected_userId\"\n            #creted_for=\"ngModel\" id=\"created_for\">\n\n        </form>\n      </div>\n    </div>\n  </ng-template>\n\n\n  <ng-template #alert_updation_module let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Meeting Schedule is changed by Admin on {{show_module_change_data.meeting_start_date}}\n      </h5>\n      <button type=\"button\" id=\"create_close_btn\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <!-- {{ modalData?.event | json }} -->\n      <div class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n\n        <form #view_meeting_form=\"ngForm\">\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Purpose</label>\n            <input type=\"text\" name=\"meeting_purpose\" [(ngModel)]=\"show_module_change_data.meeting_purpose\"\n              #meting_purpose=\"ngModel\" id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\"\n              aria-describedby=\"emailHelp\" disabled>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Place</label>\n            <input type=\"text\" name=\"meeting_place\" [(ngModel)]=\"show_module_change_data.meeting_place\"\n              #meting_place=\"ngModel\" id=\"meeting_purpose\" class=\"form-control\" id=\"exampleInputEmail1\"\n              aria-describedby=\"emailHelp\" disabled>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting Start Date & Time</label>\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" bsDaterangepicker [(ngModel)]=\"meeting_date\" #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n            <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\"\n              [(ngModel)]=\"show_module_change_data.meeting_start_date\" #meting_date=\"ngModel\"\n              class=\"form-control\" aria-describedby=\"emailHelp\" readonly=\"readonly\">\n              <!-- <ngx-datetime-picker  name=\"meeting_date\" [(ngModel)]=\"show_module_change_data.meeting_start_date\"\n              [disableButton]=\"false\" [min]=\"small_calendar_minDate\" [max]=\"maxDate\"\n              [(selectedDateTime)]=\"show_module_change_data.meeting_start_date\" [use24HourClock]=\"true\" [disableInput]=\"true\">\n              </ngx-datetime-picker> -->\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Meeting End Date & Time</label>\n            <!-- <input type=\"text\" id=\"meeting_date\" name=\"meeting_date\" bsDaterangepicker [(ngModel)]=\"meeting_date\" #meting_date=\"ngModel\" class=\"form-control\" aria-describedby=\"emailHelp\"> -->\n            <input type=\"text\" id=\"meeting_date\" name=\"meeting_end_date\"\n              [(ngModel)]=\"show_module_change_data.meeting_end_date\" #meting_date=\"ngModel\"\n              class=\"form-control\" aria-describedby=\"emailHelp\" readonly=\"readonly\">\n              <!--<ngx-datetime-picker  name=\"meeting_end_date\" [(ngModel)]=\"show_module_change_data.meeting_end_date\"\n              [disableButton]=\"false\" [min]=\"small_calendar_minDate\" [max]=\"maxDate\"\n              [(selectedDateTime)]=\"show_module_change_data.meeting_end_date\" [use24HourClock]=\"true\" [disableInput]=\"true\">\n              </ngx-datetime-picker> -->\n\n          </div>\n\n          <input type=\"hidden\" ng-value=\"ODIon6zoA\" name=\"created_for\" [(ngModel)]=\"selected_userId\"\n            #creted_for=\"ngModel\" id=\"created_for\">\n\n        </form>\n      </div>\n    </div>\n  </ng-template>\n\n\n  <ng-template #event_notification let-close=\"close\">\n    <div class=\"modal-header\">\n      <!-- <h5 class=\"modal-title\">Meeting Reminder \n      </h5> -->\n      <button type=\"button\" style=\"display:none\" id=\"event_notification_close_btn\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n\n      <!-- {{ modalData?.event | json }} -->\n      <div class=\"info-form text-center\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n\n          <h1>Reminder</h1>\n\n        <p>\n\n          <br>\n          {{reminder_data.title}}\n\n          <br>\n\n          {{reminder_data.start}}\n      \n        </p>\n\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"snooze()\">Snooze</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"dismiss()\">Dismis</button>\n\n      </div>\n    </div>\n  </ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event/user-event/user-event.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event/user-event/user-event.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n        </div>\n\n        <!-- Brand\n        <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n\n        <!-- Toggler/collapsibe Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <!-- Navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n            <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"edit_profile()\">Hii {{UserName}}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\">Log Out</a>\n                </li> \n            </ul>\n        </div> \n    </div>\n</nav>\n\n<div class=\"container-fluid calendar_header\">\n<div class=\"row text-center\">\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <button\n              class=\"btn btn-primary\"\n              (click)=\"decrement()\"\n              [disabled]=\"prevBtnDisabled\"\n            >\n              <<\n            </button>\n            <button class=\"btn btn-outline-secondary\" (click)=\"today()\">Today</button>\n            <button\n              class=\"btn btn-primary\"\n              (click)=\"increment()\"\n              [disabled]=\"nextBtnDisabled\"\n            >\n              >>\n            </button>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"changeView('month')\"\n              [class.active]=\"view === 'month'\"\n            >\n              Month\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"changeView('week')\"\n              [class.active]=\"view === 'week'\"\n            >\n              Week\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"changeView('day')\"\n              [class.active]=\"view === 'day'\"\n            >\n              Day\n            </div>\n          </div>\n        </div>\n      </div>\n      <br />\n      \n      <div [ngSwitch]=\"view\">\n        <mwl-calendar-month-view\n          *ngSwitchCase=\"'month'\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          (beforeViewRender)=\"beforeMonthViewRender($event)\"\n        >\n        </mwl-calendar-month-view>\n        <mwl-calendar-week-view\n          *ngSwitchCase=\"'week'\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n        >\n        </mwl-calendar-week-view>\n        <mwl-calendar-day-view\n          *ngSwitchCase=\"'day'\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n        >\n        </mwl-calendar-day-view>\n      </div>\n    </div>\n       "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/change-password/change-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/change-password/change-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n        </div>\n\n        <!-- Brand\n        <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n\n        <!-- Toggler/collapsibe Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <!-- Navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n            <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n                <li class=\"nav-item\" *ngIf=\"M_P_UserType === 'admin'\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"all_users()\">User List</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0)\" (click)=\"edit_profile()\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Hii {{UserName}}</a>\n\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"edit_profile()\">Edit Profile</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"change_password()\">Change Password</a>\n                    </div>\n\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\">Log Out</a>\n                </li> \n            </ul>\n        </div> \n    </div>\n</nav>\n\n<div class=\"container-fluid \">\n\n        <div class=\"row\">\n    \n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n    \n                <div class=\"card card-signin my-5\" style=\"border: 0px!important;\">\n                    <div class=\"card-body\">\n    \n                        <h1 style=\"text-align: center;margin-bottom:2%;\">Change Password</h1>\n    \n                        \n                        <div class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n                            <form  #signUpForm=\"ngForm\" (ngSubmit)=\"change_password_data()\" class=\"form-inlin justify-content-center\">\n    \n                                \n    \n                                <div class=\"form-group\">\n                                    <label for=\"exampleInputPasssword1\">Old Password</label>\n                                    <input type=\"password\" name=\"old_password\" [(ngModel)]=\"old_password\" #opwd=\"ngModel\"\n                                        class=\"form-control\" id=\"exampleOldPassword\" aria-describedby=\"passwordlHelp\"\n                                        placeholder=\"Enter Old Password\">\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label for=\"exampleInputPasssword1\">New Password</label>\n                                    <input type=\"password\" name=\"new_password\" [(ngModel)]=\"new_password\" #npwd=\"ngModel\"\n                                        class=\"form-control\" (keyup)=\"PassRequirements($event.target.value)\" id=\"exampleInputPassword1\" aria-describedby=\"passwordlHelp\"\n                                        placeholder=\"Enter New Password\">\n\n                                        <div class=\"message \" >\n                                                <span class=\"tooltiptext\" id=\"tooltiptext\">\n                                                    <h3>Password must contain the following:</h3>\n                                                    <p id=\"letter\" class=\"invalid\">A <b>lowercase</b> letter</p>\n                                                    <p id=\"capital\" class=\"invalid\">A <b>capital (uppercase)</b> letter</p>\n                                                    <p id=\"number\" class=\"invalid\">A <b>number</b></p>\n                                                    <p id=\"length\" class=\"invalid\">Minimum <b>7 characters</b> and maximum <b>14 characters</b></p>\n                                                </span>\n                                              </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label for=\"exampleInputPasssword1\">Repeat New Password</label>\n                                    <input type=\"password\" name=\"repeat_new_password\" [(ngModel)]=\"repeat_new_password\" #rnpwd=\"ngModel\"\n                                        class=\"form-control\" id=\"exampleRepeatNewPassword\" aria-describedby=\"passwordlHelp\"\n                                        placeholder=\"Repeat New Password\">\n                                </div>\n                                \n                                <button type=\"submit\" class=\"btn btn_width\">Change Password</button>\n                            </form>\n    \n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    \n    </div>    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/edit-profile/edit-profile.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/edit-profile/edit-profile.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n            </div>\n    \n            <!-- Brand\n            <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n    \n            <!-- Toggler/collapsibe Button -->\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n    \n            <!-- Navbar links -->\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n                <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n                    <li class=\"nav-item\" *ngIf=\"M_P_UserType === 'admin'\">\n                        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"all_users()\">User List</a>\n                    </li>\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0)\" (click)=\"edit_profile()\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Hii {{UserName}}</a>\n\n                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"edit_profile()\">Edit Profile</a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"change_password()\">Change Password</a>\n                        </div>\n\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\">Log Out</a>\n                    </li> \n                </ul>\n            </div> \n        </div>\n    </nav>\n    \n    <div class=\"container-fluid \">\n\n            <div class=\"row\">\n        \n                <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        \n                    <div class=\"card card-signin my-5\" style=\"border: 0px!important;\">\n                        <div class=\"card-body\">\n        \n                            <h1 style=\"text-align: center;margin-bottom:2%;\">Edit Profile</h1>\n        \n                            \n                            <div class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n                                <form  #signUpForm=\"ngForm\" (ngSubmit)=\"edit_profile_data()\" class=\"form-inlin justify-content-center\">\n        \n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Firstname</label>\n                                        <input type=\"email\" name=\"firstName\" [(ngModel)]=\"single_user_data.firstName\" #fname=\"ngModel\"\n                                            class=\"form-control\" id=\"exampleInputfirstname\" aria-describedby=\"emailHelp\"\n                                            placeholder=\"Enter Firstname\">\n                                    </div>\n        \n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Lastname</label>\n                                        <input type=\"email\" name=\"lastName\" [(ngModel)]=\"single_user_data.lastName\" #lname=\"ngModel\"\n                                            class=\"form-control\" id=\"exampleInputlastname\" aria-describedby=\"emailHelp\"\n                                            placeholder=\"Enter Lastname\">\n                                    </div>\n        \n                                    <div class=\"phone-list\">\n                                        <label for=\"exampleInputEmail1\">Mobile Number</label>\n                                        <div class=\"input-group phone-input\">\n                                          <span class=\"input-group-btn\" style=\"width:30%;\">\n                                                <select  class=\"form-control\" id=\"cntry__\"  name=\"cntry\" [(ngModel)]=\"single_user_data.country_name\"  id=\"country_drop_down\" (change)=\"getcountryname($event.target.value)\">    \n                                                    <option *ngFor=\"let cntrs of entries\" [value]=\"cntrs[0]\" >{{cntrs[1]}}</option>\n                                                </select>\n                                            </span> \n                                            \n                                            <input  type=\"hidden\" id=\"cc_code\" name=\"country_code\" [(ngModel)]=\"single_user_data.country_code\" [value]=\"cntry_code\"/>\n\n                                            <input  type=\"hidden\" id=\"cc_code_length\" name=\"cc_code_length\" [(ngModel)]=\"single_user_data.cntry_code_length\" [value]=\"cntry_code_length\"/>\n                                        \n                                            <input type=\"hidden\" id=\"cc_name\" name=\"name_of_country\" [(ngModel)]=\"single_user_data.country_name\" ng-init=\"name_of_country=2\" ng-value=\"name_of_country\" #c_name=\"ngModel\" class=\"type-input\" [value]=\"cntry\" />\n        \n                                            <input type=\"text\" id=\"mobileNumber\" name=\"mobileNumber\" [(ngModel)]=\"single_user_data.mobileNumber\" #m_no=\"ngModel\" class=\"form-control\" placeholder=\"+1 (999) 999 9999\" value=\"{{cntry_code}}\" />\n                                        </div>\n                                    </div>\n        \n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Email address</label>\n                                        <input type=\"email\" name=\"email\" [(ngModel)]=\"single_user_data.email\" #mail=\"ngModel\"\n                                            class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                                            placeholder=\"Enter email\">\n                                    </div>\n        \n                                    \n                                    <button type=\"submit\" class=\"btn btn_width\">Edit Profile</button>\n                                </form>\n        \n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        \n        </div>    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n            </div>\n    \n            <!-- Brand\n            <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n    \n            <!-- Toggler/collapsibe Button -->\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n    \n            <!-- Navbar links -->\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n                <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"login()\">Login </a>\n                    </li>\n\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"signUp()\">signUp </a>\n                    </li>\n\n                </ul>\n            </div> \n        </div>\n    </nav>\n\n<div class=\"container-fluid\">\n\n        <div class=\"row\">\n\n                <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\" >\n\n                        <div class=\"card card-signin my-5\" style=\"border: 0px!important;\">\n                            <div class=\"card-body\">\n                \n                        <h1 style=\"text-align: center;margin-bottom:2%;\">Recover Password</h1>\n                \n                    <div class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n        <form #LoginForm=\"ngForm\" (ngSubmit)=\"forgot_pwd()\" class=\"form-inlin justify-content-center\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" #mail=\"ngModel\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n          </div>\n          \n          <div class=\"loader\" id=\"loader\" ></div>\n          \n          <button type=\"submit\" class=\"btn btn_width\">Send Mail</button>\n        </form>\n\n        <!-- <div class=\"create-account\">\n            <a [routerLink]=\"['/login']\">You Already Have an Account click here</a>\n        </div> -->\n\n    </div>\n</div>\n</div>\n</div>\n</div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n        </div>\n\n        <!-- Brand\n        <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n\n        <!-- Toggler/collapsibe Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <!-- Navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n            <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"signUp()\">SignUp </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n\n            <div class=\"card card-signin my-5\" style=\"border: 0px!important;\">\n                <div class=\"card-body\">\n\n                    <h1 style=\"text-align: center;margin-bottom:2%;\">Login</h1>\n\n                    <div class=\"info-form\"\n                        style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n                        <form #LoginForm=\"ngForm\" (ngSubmit)=\"login_data()\" class=\"form-inlin justify-content-center\">\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputEmail1\">Email address</label>\n                                <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" #mail=\"ngModel\"\n                                    class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                                    placeholder=\"Enter email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputPassword1\">Password</label>\n                                <input  type=\"password\" name=\"password\" [(ngModel)]=\"password\" #pwd=\"ngModel\"\n                                    class=\"form-control\"  (keyup)=\"PassRequirements($event.target.value)\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n                                \n                                    <div class=\"message \" >\n                                            <span class=\"tooltiptext\" id=\"tooltiptext\">\n                                                <h3>Password must contain the following:</h3>\n                                                <p id=\"letter\" class=\"invalid\">A <b>lowercase</b> letter</p>\n                                                <p id=\"capital\" class=\"invalid\">A <b>capital (uppercase)</b> letter</p>\n                                                <p id=\"number\" class=\"invalid\">A <b>number</b></p>\n                                                <p id=\"length\" class=\"invalid\">Minimum <b>7 characters</b> and maximum <b>14 characters</b></p>\n                                            </span>\n                                          </div>\n                                          \n                                \n                                    <div class=\"forgot-password-link\">\n                                    <a [routerLink]=\"['/forgot-password']\">Forgot-password??</a>\n                                </div>\n\n                               \n\n                            </div>\n\n                           \n\n                            <button type=\"submit\" class=\"btn btn_width\">Log In</button>\n                        </form>\n\n                        <div class=\"create-account\">\n                            <a [routerLink]=\"['/signUp']\">Create an Account??</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/recover-password/recover-password.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/recover-password/recover-password.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n        </div>\n\n        <!-- Brand\n            <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n\n        <!-- Toggler/collapsibe Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <!-- Navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n            <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"signUp()\">SignUp </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n\n            <div class=\"card card-signin my-5\" style=\"border: 0px!important;\">\n                <div class=\"card-body\">\n\n                    <h1 style=\"text-align: center;margin-bottom:2%;\">Recover Password</h1>\n\n                    <div class=\"info-form\"\n                        style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n                        <form #LoginForm=\"ngForm\" (ngSubmit)=\"change_pwd()\" class=\"form-inlin justify-content-center\">\n\n                            <div ng-hide=\"myValue\" class=\"ng-hide\">\n                                <input type=\"hidden\" value=\"{{email_from_token}}\" name=\"email\" [(ngModel)]=\"email\"\n                                    #tok=\"ngModel\" class=\"form-control\" id=\"exampleInputEmail1\"\n                                    aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                            </div>\n\n\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputEmail1\">Password</label>\n                                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" #pwd=\"ngModel\"\n                                    class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                                    placeholder=\"Enter Passowrd\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputEmail1\">Retype new Password</label>\n                                <input type=\"password\" name=\"match_password\" [(ngModel)]=\"match_password\" #m_pwd=\"ngModel\"\n                                    class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                                    placeholder=\"Retypr Passowrd\">\n                            </div>\n\n                            <button type=\"submit\" class=\"btn btn_width\">Recover Passowrd</button>\n                        </form>\n\n                        <div class=\"create-account\">\n                            <a [routerLink]=\"['/login']\">You Already Have an Account click here</a>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" [routerLink]=\"['/login']\">Meeting Planner</a>\n        </div>\n\n        <!-- Brand\n            <a class=\"navbar-brand\" href=\"#\">edwisor</a>  -->\n\n        <!-- Toggler/collapsibe Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <!-- Navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n            <ul class=\"nav navbar-nav ml-auto\" id=\"collapsibleNavbar\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"login()\">Login </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container-fluid \">\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n\n            <div class=\"card card-signin my-5\" style=\"border: 0px!important;\">\n                <div class=\"card-body\">\n\n                    <h1 style=\"text-align: center;margin-bottom:2%;\">Sign UP</h1>\n\n                    \n                    <div id=\"info-form\" class=\"info-form\" style=\"border:1px solid;border-color:lightgrey;border-radius:25px;padding:5%;\">\n                        <form  #signUpForm=\"ngForm\" (ngSubmit)=\"signup_data()\" class=\"form-inlin justify-content-center\">\n\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputEmail1\">Firstname</label>\n                                <input type=\"email\" name=\"firstName\" [(ngModel)]=\"firstName\" #fname=\"ngModel\"\n                                    class=\"form-control\" id=\"exampleInputfirstname\" aria-describedby=\"emailHelp\"\n                                    placeholder=\"Enter Firstname\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputEmail1\">Lastname</label>\n                                <input type=\"email\" name=\"lastName\" [(ngModel)]=\"lastName\" #lname=\"ngModel\"\n                                    class=\"form-control\" id=\"exampleInputlastname\" aria-describedby=\"emailHelp\"\n                                    placeholder=\"Enter Lastname\">\n                            </div>\n\n                            <!-- <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Mobile Number</label>\n                        <select class=\"form-control country_code_dropdown\" id=\"exampleFormControlSelect2\">\n                                <option>1</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                                <option>5</option>\n                            </select>\n                        <input type=\"email\" name=\"mobileNumber\" [(ngModel)]=\"mobileNumber\" #m_no=\"ngModel\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Mobile Number\">\n                    </div> -->\n\n                            <div class=\"phone-list\">\n                                <label for=\"exampleInputEmail1\">Mobile Number</label>\n                                <div class=\"input-group phone-input\">\n                                  <span class=\"input-group-btn\" style=\"width:30%;\">\n                                        <select class=\"form-control\"  name=\"cntry\" [(ngModel)]=\"cntry\"  id=\"exampleFormControlSelect2\" (change)=\"getcountryname(cntry)\">    \n                                            <option *ngFor=\"let cntrs of entries\" [value]=\"cntrs[0]\">{{cntrs[1]}}</option>\n                                        </select>\n                                    </span> \n                                    \n                                    <input  type=\"hidden\" id=\"cc_code\" name=\"country_code\" [(ngModel)]=\"country_code\" [value]=\"cntry_code\"/>\n                                \n                                    <input type=\"hidden\" id=\"cc_name\" name=\"name_of_country\" [(ngModel)]=\"name_of_country\" ng-init=\"name_of_country=2\" ng-value=\"name_of_country\" #c_name=\"ngModel\" class=\"type-input\" [value]=\"cntry\" />\n\n                                    <input type=\"text\" id=\"mobileNumber\" name=\"mobileNumber\" [(ngModel)]=\"mobileNumber\" #m_no=\"ngModel\" class=\"form-control\" placeholder=\"+1 (999) 999 9999\" value=\"{{cntry_code}}\" />\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputEmail1\">Email address</label>\n                                <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" #mail=\"ngModel\"\n                                    class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                                    placeholder=\"Enter email\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"exampleInputPassword1\">Password</label>\n                                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" #pwd=\"ngModel\"\n                                    class=\"form-control\" (keyup)=\"PassRequirements($event.target.value)\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n\n                                    <div class=\"message \" >\n                                            <span class=\"tooltiptext\" id=\"tooltiptext\">\n                                                <h3>Password must contain the following:</h3>\n                                                <p id=\"letter\" class=\"invalid\">A <b>lowercase</b> letter</p>\n                                                <p id=\"capital\" class=\"invalid\">A <b>capital (uppercase)</b> letter</p>\n                                                <p id=\"number\" class=\"invalid\">A <b>number</b></p>\n                                                <p id=\"length\" class=\"invalid\">Minimum <b>7 characters</b> and maximum <b>14 characters</b></p>\n                                            </span>\n                                          </div>\n\n                                <!-- <div class=\"forgot-password-link\">\n                            <a [routerLink]=\"['/forgot-password']\">Forgot-password??</a>\n                        </div> -->\n\n                            </div>\n\n                            <div class=\"loader\" id=\"loader\" ></div>\n\n                            <button type=\"submit\" class=\"btn btn_width\">SignUP</button>\n                        </form>\n\n                        <div class=\"create-account\">\n                            <a [routerLink]=\"['/login']\">You Already Have an Account click here</a>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/verify-user/verify-user.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/verify-user/verify-user.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'meeting-planner';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _event_event_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/event.module */ "./src/app/event/event.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_datetime_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-datetime-picker */ "./node_modules/ngx-datetime-picker/index.js");
/* harmony import */ var ngx_datetime_picker__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_datetime_picker__WEBPACK_IMPORTED_MODULE_18__);



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModalModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_10__["UserModule"],
                _event_event_module__WEBPACK_IMPORTED_MODULE_11__["EventModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_datetime_picker__WEBPACK_IMPORTED_MODULE_18__["DateTimePickerModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_15__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__["adapterFactory"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] }
                ])
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demo-utils/calendar-header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo-utils/calendar-header.component.ts ***!
  \*********************************************************/
/*! exports provided: CalendarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarHeaderComponent", function() { return CalendarHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent() {
        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CalendarHeaderComponent.prototype, "view", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CalendarHeaderComponent.prototype, "viewDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CalendarHeaderComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CalendarHeaderComponent.prototype, "viewChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
    CalendarHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mwl-demo-utils-calendar-header',
            template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  "
        })
    ], CalendarHeaderComponent);
    return CalendarHeaderComponent;
}());



/***/ }),

/***/ "./src/app/demo-utils/module.ts":
/*!**************************************!*\
  !*** ./src/app/demo-utils/module.ts ***!
  \**************************************/
/*! exports provided: DemoUtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUtilsModule", function() { return DemoUtilsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _calendar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-header.component */ "./src/app/demo-utils/calendar-header.component.ts");






var DemoUtilsModule = /** @class */ (function () {
    function DemoUtilsModule() {
    }
    DemoUtilsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"]],
            declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarHeaderComponent"]],
            exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarHeaderComponent"]]
        })
    ], DemoUtilsModule);
    return DemoUtilsModule;
}());



/***/ }),

/***/ "./src/app/event-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/event-service.service.ts ***!
  \******************************************/
/*! exports provided: EventServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventServiceService", function() { return EventServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var EventServiceService = /** @class */ (function () {
    function EventServiceService(_http, _userservice, toastr, cookie) {
        var _this = this;
        this._http = _http;
        this._userservice = _userservice;
        this.toastr = toastr;
        this.cookie = cookie;
        this.userBaseUrl = "http://api.npatelproject.site/api/v1/users";
        this.eventBaseUrl = "http://api.npatelproject.site/api/v1/meetings";
        this.baseUrl = "http://api.npatelproject.site";
        this.verifyUSer = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].create(function (observer) {
                _this.socket.on('VerifyUser', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onlineUSerList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].create(function (observer) {
                _this.socket.on('online-user-list', function (userList) {
                    observer.next(userList);
                });
            });
        };
        this.setUser = function (authToken) {
            console.log("set user is called");
            _this.socket.emit("set-User", authToken);
        };
        this.Create_Mettting = function (meeting_dataObj) {
            _this.socket.emit('create-meeting', meeting_dataObj);
        };
        this.meeting_list = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].create(function (observer) {
                _this.socket.on('all-users-meeting-list', function (userList) {
                    observer.next(userList);
                });
            });
        };
        this.particular_user_meeting = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        };
        this.Logout = function (data) {
            var get_data = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('userId', data.userId);
            var response = _this._http.post(_this.userBaseUrl + "/logOut", get_data);
            //alert(response);
            return response;
        };
        this.getallUsers = function () {
            var response = _this._http.get(_this.userBaseUrl + "/view/all");
            return response;
        };
        this.GetallEventsOfUSer = function (sender_receiver_obj, current_year, current_month) {
            var params;
            if (sender_receiver_obj.meeting_created_by != null || sender_receiver_obj.meeting_created_by != undefined) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('meeting_created_by', sender_receiver_obj.meeting_created_by)
                    .set('meeting_created_for', sender_receiver_obj.meeting_created_for)
                    .set('month', current_month)
                    .set('year', current_year);
                //.set('month','7');
            }
            else {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('meeting_created_for', sender_receiver_obj.meeting_created_for)
                    .set('month', current_month)
                    .set('year', current_year);
                //.set('month','7');
            }
            //console.log(params);
            var response = _this._http.post(_this.eventBaseUrl + "/Perticular-User-meeting", params);
            return response;
        };
        this.update_meeting = function (updated_meeting_data) {
            _this.socket.emit('update-meeting', updated_meeting_data);
        };
        this.delete_meeting = function (meeting_delete_obj) {
            _this.socket.emit('delete-meeting', meeting_delete_obj);
        };
        this.getCurrentDateData = function (sender_receiver_obj) {
            var params;
            if (sender_receiver_obj.meeting_created_by != null || sender_receiver_obj.meeting_created_by != undefined) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('meeting_created_by', sender_receiver_obj.meeting_created_by)
                    .set('meeting_created_for', sender_receiver_obj.meeting_created_for);
                //.set('month','7');
            }
            else {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('meeting_created_for', sender_receiver_obj.meeting_created_for);
                //.set('month','7');
            }
            console.log(params);
            var response = _this._http.post(_this.eventBaseUrl + "/every-minute-data", params);
            return response;
        };
        this.getReminder = function (event_data) {
            _this.socket.emit('Reminder', event_data);
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__('http://api.npatelproject.site', { transports: ['websocket'] });
    }
    EventServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    EventServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EventServiceService);
    return EventServiceService;
}());



/***/ }),

/***/ "./src/app/event/admin-event/admin-event.component.css":
/*!*************************************************************!*\
  !*** ./src/app/event/admin-event/admin-event.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav {\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .nav-link {\r\n    padding-right: .5rem !important;\r\n    padding-left: .5rem !important;\r\n  }\r\n  \r\n  /* Fixes dropdown menus placed on the right side */\r\n  \r\n  .ml-auto .dropdown-menu {\r\n    left: auto !important;\r\n    right: 0px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvYWRtaW4tZXZlbnQvYWRtaW4tZXZlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQiw4QkFBOEI7RUFDaEM7O0VBRUEsa0RBQWtEOztFQUNsRDtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9ldmVudC9hZG1pbi1ldmVudC9hZG1pbi1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1uYXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpeGVzIGRyb3Bkb3duIG1lbnVzIHBsYWNlZCBvbiB0aGUgcmlnaHQgc2lkZSAqL1xyXG4gIC5tbC1hdXRvIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/event/admin-event/admin-event.component.ts":
/*!************************************************************!*\
  !*** ./src/app/event/admin-event/admin-event.component.ts ***!
  \************************************************************/
/*! exports provided: AdminEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEventComponent", function() { return AdminEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_event_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/event-service.service */ "./src/app/event-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AdminEventComponent = /** @class */ (function () {
    function AdminEventComponent(_userservice, _router, _eventser, toastr, cookie) {
        var _this = this;
        this._userservice = _userservice;
        this._router = _router;
        this._eventser = _eventser;
        this.toastr = toastr;
        this.cookie = cookie;
        this.change_password = function () {
            _this._router.navigate(['/change-password', _this.UserId]);
        };
        this.all_users = function () {
            _this._router.navigate(['/Aevent']);
        };
        this.checkstatus = function () {
            if (_this.M_P_AuthToken === undefined || _this.M_P_AuthToken === null || _this.M_P_AuthToken === '') {
                _this._router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        };
        this.edit_profile = function () {
            _this._router.navigate(['/edit-profile', _this.UserId]);
        };
        this.logout = function () {
            //alert();
            var logged_in_userId = _this.cookie.get('UserId');
            var userId_data = {
                userId: logged_in_userId
            };
            _this._eventser.Logout(userId_data).subscribe(function (apiResponse) {
                //alert(apiResponse);
                if (apiResponse['status'] == 200) {
                    _this.cookie.delete('M_P_AuthToken');
                    _this.cookie.delete('UserId');
                    _this.cookie.delete('UserName');
                    _this.cookie.delete('M_P_UserType');
                    _this._userservice.setUserInfoLocalStorage("");
                    _this._router.navigate(['/']);
                    _this.toastr.success(apiResponse['message']);
                }
                else {
                    _this.toastr.warning(apiResponse['message']);
                }
            });
        };
    }
    AdminEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.M_P_AuthToken = this.cookie.get('M_P_AuthToken');
        this.UserId = this.cookie.get('UserId');
        this.UserName = this.cookie.get('UserName');
        this.M_P_UserType = this.cookie.get('M_P_UserType');
        this.userInfo = this._userservice.getLocalStorageUserinfo();
        this.checkstatus();
        this.get_user_list = this._eventser.getallUsers().subscribe(function (apiresponse) {
            if (apiresponse['status'] == 200) {
                _this.get_user_list = apiresponse['data'];
                //console.log(this.get_user_list);
            }
            else {
                _this.toastr.warning(apiresponse['message']);
            }
        });
    };
    AdminEventComponent.ctorParameters = function () { return [
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_event_service_service__WEBPACK_IMPORTED_MODULE_2__["EventServiceService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    AdminEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-event',
            template: __webpack_require__(/*! raw-loader!./admin-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/event/admin-event/admin-event.component.html"),
            styles: [__webpack_require__(/*! ./admin-event.component.css */ "./src/app/event/admin-event/admin-event.component.css")]
        })
    ], AdminEventComponent);
    return AdminEventComponent;
}());



/***/ }),

/***/ "./src/app/event/event.module.ts":
/*!***************************************!*\
  !*** ./src/app/event/event.module.ts ***!
  \***************************************/
/*! exports provided: EventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_event_user_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-event/user-event.component */ "./src/app/event/user-event/user-event.component.ts");
/* harmony import */ var _admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-event/admin-event.component */ "./src/app/event/admin-event/admin-event.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_datetime_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-datetime-picker */ "./node_modules/ngx-datetime-picker/index.js");
/* harmony import */ var ngx_datetime_picker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_datetime_picker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _particular_user_event_particular_user_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./particular-user-event/particular-user-event.component */ "./src/app/event/particular-user-event/particular-user-event.component.ts");
/* harmony import */ var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../demo-utils/calendar-header.component */ "./src/app/demo-utils/calendar-header.component.ts");
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../demo-utils/module */ "./src/app/demo-utils/module.ts");















var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_event_user_event_component__WEBPACK_IMPORTED_MODULE_4__["UserEventComponent"], _admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_5__["AdminEventComponent"], _particular_user_event_particular_user_event_component__WEBPACK_IMPORTED_MODULE_12__["ParticularUserEventComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _demo_utils_module__WEBPACK_IMPORTED_MODULE_14__["DemoUtilsModule"],
                ngx_datetime_picker__WEBPACK_IMPORTED_MODULE_11__["DateTimePickerModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'Uevent', component: _user_event_user_event_component__WEBPACK_IMPORTED_MODULE_4__["UserEventComponent"] },
                    { path: 'Aevent', component: _admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_5__["AdminEventComponent"] },
                    { path: 'per-user/:userId', component: _particular_user_event_particular_user_event_component__WEBPACK_IMPORTED_MODULE_12__["ParticularUserEventComponent"] }
                ])
            ],
            exports: [_particular_user_event_particular_user_event_component__WEBPACK_IMPORTED_MODULE_12__["ParticularUserEventComponent"], _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_13__["CalendarHeaderComponent"]]
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "./src/app/event/particular-user-event/particular-user-event.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/event/particular-user-event/particular-user-event.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendar_header\r\n{\r\n    padding-top : 2% !important;\r\n}\r\n\r\n.cal-disabled {\r\n    background-color: #eee;\r\n    pointer-events: none;\r\n  }\r\n\r\n.cal-disabled .cal-day-number {\r\n    opacity: 0.1;\r\n  }\r\n\r\n.btn-primary {\r\n    color : #fff !important;\r\n    background-color: #6c757d !important;\r\n    border-color:#6c757d!important;\r\n  }\r\n\r\n.btn_width{\r\n    \r\n    border-color:lightgrey;\r\n    width:100%;\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n\r\n.ngx-picker input {\r\n\r\n  display: block;\r\n    width: 100%;\r\n    height: calc(1.5em + .75rem + 2px);\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n\r\n}\r\n\r\n.btn\r\n  {\r\n     /*margin: 2% !important;  */\r\n     border-radius: 0rem;\r\n  }\r\n\r\n.btn-primary:not(:disabled):not(.disabled).active,\r\n  .btn-primary:not(:disabled):not(.disabled):active{\r\n\r\n    color : #fff !important;\r\n    background-color: darkgray !important;\r\n    border-color:darkgray!important;\r\n\r\n  }\r\n\r\nbutton.btn.btn-primary.pull-right {\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvcGFydGljdWxhci11c2VyLWV2ZW50L3BhcnRpY3VsYXItdXNlci1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLDhCQUE4QjtFQUNoQzs7QUFFQTs7SUFFRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0VBRUUsY0FBYztJQUNaLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUVBQXFFOztBQUV6RTs7QUFFRTs7S0FFRywyQkFBMkI7S0FDM0IsbUJBQW1CO0VBQ3RCOztBQUVBOzs7SUFHRSx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLCtCQUErQjs7RUFFakM7O0FBRUE7SUFDRSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQvcGFydGljdWxhci11c2VyLWV2ZW50L3BhcnRpY3VsYXItdXNlci1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyX2hlYWRlclxyXG57XHJcbiAgICBwYWRkaW5nLXRvcCA6IDIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWwtZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY2FsLWRpc2FibGVkIC5jYWwtZGF5LW51bWJlciB7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgY29sb3IgOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IzZjNzU3ZCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuX3dpZHRoe1xyXG4gICAgXHJcbiAgICBib3JkZXItY29sb3I6bGlnaHRncmV5O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVx0XHJcblxyXG4ubmd4LXBpY2tlciBpbnB1dCB7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG5cclxufVxyXG5cclxuICAuYnRuXHJcbiAge1xyXG4gICAgIC8qbWFyZ2luOiAyJSAhaW1wb3J0YW50OyAgKi9cclxuICAgICBib3JkZXItcmFkaXVzOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuICAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZle1xyXG5cclxuICAgIGNvbG9yIDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjpkYXJrZ3JheSFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/event/particular-user-event/particular-user-event.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/event/particular-user-event/particular-user-event.component.ts ***!
  \********************************************************************************/
/*! exports provided: ParticularUserEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticularUserEventComponent", function() { return ParticularUserEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_event_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/event-service.service */ "./src/app/event-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");














//import { $ } from 'protractor';
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
function addPeriod(period, date, amount) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_11__["addDays"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_11__["addWeeks"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_11__["addMonths"]
    }[period](date, amount);
}
function subPeriod(period, date, amount) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_11__["subDays"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_11__["subWeeks"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_11__["subMonths"]
    }[period](date, amount);
}
function startOfPeriod(period, date) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_11__["startOfDay"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_11__["startOfWeek"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_11__["startOfMonth"]
    }[period](date);
}
function endOfPeriod(period, date) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_11__["endOfDay"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_11__["endOfWeek"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_11__["endOfMonth"]
    }[period](date);
}
var ParticularUserEventComponent = /** @class */ (function () {
    function ParticularUserEventComponent(actiroute, modal, _userservice, _router, _eventser, toastr, cookie) {
        var _this = this;
        this.actiroute = actiroute;
        this.modal = modal;
        this._userservice = _userservice;
        this._router = _router;
        this._eventser = _eventser;
        this.toastr = toastr;
        this.cookie = cookie;
        this.view = 'month';
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarView"];
        this.viewDate = new Date();
        this.events = [];
        this.todays_event = [];
        this.actions = [];
        this.current_date = new Date();
        this.current_date_months = new Date().getMonth();
        this.current_year_data = new Date().getFullYear();
        this.min_new_date = new Date("January 1, " + this.current_year_data + " 00:00:00");
        this.max_new_date = new Date("December 31, " + this.current_year_data + " 00:00:00");
        this.minDate = this.min_new_date;
        this.maxDate = this.max_new_date;
        this.small_calendar_minDate = new Date();
        this.prevBtnDisabled = false;
        this.nextBtnDisabled = false;
        this.userList = [];
        this.meeting_list = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.activeDayIsOpen = true;
        this.get_all_meetings_of_user = function (sender_reciver_obj_, current_year, current_month) {
            _this.events = [];
            _this._eventser.GetallEventsOfUSer(sender_reciver_obj_, current_year, current_month).subscribe(function (apiResponse) {
                var e_1, _a;
                if (apiResponse['status'] == 200) {
                    try {
                        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](apiResponse['data']), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var x_meeting = _c.value;
                            _this.events = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.events, [
                                {
                                    eventId: x_meeting['eventId'],
                                    meeting_place: x_meeting['meeting_place'],
                                    title: x_meeting['meeting_purpose'],
                                    start: new Date(x_meeting['meeting_start_date']),
                                    end: new Date(x_meeting['meeting_end_date']),
                                    actions: _this.actions,
                                    color: colors.red,
                                }
                            ]);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                }
                _this.refresh.next();
                _this.every_Minute_data();
            });
        };
        this.todays_event_data = function (sender_receiver_obj) {
            _this._eventser.getCurrentDateData(_this.sender_receiver_obj).subscribe(function (apiResponse) {
                var e_2, _a;
                if (apiResponse['status'] == 200) {
                    try {
                        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](apiResponse['data']), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var today_m_data = _c.value;
                            /* this.event_color = colors.red;
                  
                      
                            //alert(Date.parse(meeting_dataObj.meeting_start_date));
                            let strat_push_date = new Date(today_m_data['meeting_start_date']);
                            let end_push_date = new Date(today_m_data['meeting_end_date']);
                  
                            this.events.map((IEevents) => {
                  
                                let event_dt1 = new Date(IEevents.start.getFullYear(),IEevents.start.getMonth(),IEevents.start.getDate(),IEevents.start.getHours(),IEevents.start.getMinutes(),IEevents.start.getSeconds());
                  
                                let event_dt2 = new Date(IEevents.end.getFullYear(),IEevents.end.getMonth(),IEevents.end.getDate(),IEevents.end.getHours(),IEevents.end.getMinutes(),IEevents.end.getSeconds());
                                if( (strat_push_date >= event_dt1 && strat_push_date <= event_dt2) || ((end_push_date >= event_dt1 && end_push_date <= event_dt2)))
                                {
                                    this.event_color = colors.yellow;
                                }
                  
                            });  */
                            _this.todays_event = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.todays_event, [
                                {
                                    eventId: today_m_data['eventId'],
                                    meeting_created_for: today_m_data['meeting_created_for'],
                                    meeting_created_by: today_m_data['meeting_created_by'],
                                    meeting_place: today_m_data['meeting_place'],
                                    title: today_m_data['meeting_purpose'],
                                    start: new Date(today_m_data['meeting_start_date']),
                                    end: new Date(today_m_data['meeting_end_date']),
                                    actions: _this.actions,
                                    color: colors.red,
                                    time_gone: false
                                }
                            ]);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    console.log("else");
                }
            });
        };
        this.all_users = function () {
            _this._router.navigate(['/Aevent']);
        };
        this.checkstatus = function () {
            if (_this.M_P_UserType == 'admin') {
                _this.actions = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.actions, [
                    {
                        label: '<i class="fa fa-fw fa-pencil"></i>',
                        onClick: function (_a) {
                            var event = _a.event;
                            _this.handleEvent('Edited', event);
                        }
                    },
                    {
                        label: '<i class="fa fa-fw fa-times"></i>',
                        onClick: function (_a) {
                            var event = _a.event;
                            //this.events = this.events.filter(iEvent => iEvent !== event);
                            _this.handleEvent('Deleted', event);
                        }
                    }
                ]);
            }
            else {
                _this.actions = [];
            }
            if (_this.M_P_AuthToken === undefined || _this.M_P_AuthToken === null || _this.M_P_AuthToken === '') {
                _this._router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        };
        this.verifyUserConfirmation = function () {
            _this._eventser.verifyUSer().subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this._eventser.setUser(_this.M_P_AuthToken);
            });
        };
        this.getOnlineUserList = function () {
            _this._eventser.onlineUSerList().subscribe(function (userList1) {
                //alert(JSON.stringify(userList1));
                _this.userList = [];
                for (var x in userList1) {
                    var user = { userId: userList1[x]['userId'], userName: userList1[x]['fullname'] };
                    _this.userList.push(user);
                    console.log(_this.userList);
                }
            });
        };
        this.change_password = function () {
            _this._router.navigate(['/change-password', _this.UserId]);
        };
        this.edit_profile = function () {
            _this._router.navigate(['/edit-profile', _this.UserId]);
        };
        this.logout = function () {
            //alert();
            var logged_in_userId = _this.cookie.get('UserId');
            var userId_data = {
                userId: logged_in_userId
            };
            _this._eventser.Logout(userId_data).subscribe(function (apiResponse) {
                //alert(apiResponse);
                if (apiResponse['status'] == 200) {
                    _this.cookie.delete('M_P_AuthToken');
                    _this.cookie.delete('UserId');
                    _this.cookie.delete('UserName');
                    _this.cookie.delete('M_P_UserType');
                    _this._userservice.setUserInfoLocalStorage("");
                    _this._router.navigate(['/']);
                    _this.toastr.success(apiResponse['message']);
                }
                else {
                    _this.toastr.warning(apiResponse['message']);
                }
            });
        };
        this.pushToEvents = function (meeting_dataObj) {
            console.log("push events called");
            /* this.event_color = colors.red;
        
            
            //alert(Date.parse(meeting_dataObj.meeting_start_date));
            let strat_push_date = new Date(meeting_dataObj.meeting_start_date);
            let end_push_date = new Date(meeting_dataObj.meeting_end_date);
        
            this.events.map((IEevents) => {
        
                let event_dt1 = new Date(IEevents.start.getFullYear(),IEevents.start.getMonth(),IEevents.start.getDate(),IEevents.start.getHours(),IEevents.start.getMinutes(),IEevents.start.getSeconds());
        
                let event_dt2 = new Date(IEevents.end.getFullYear(),IEevents.end.getMonth(),IEevents.end.getDate(),IEevents.end.getHours(),IEevents.end.getMinutes(),IEevents.end.getSeconds());
                if( (strat_push_date >= event_dt1 && strat_push_date <= event_dt2) || ((end_push_date >= event_dt1 && end_push_date <= event_dt2)))
                {
                    this.event_color = colors.yellow;
                }
        
            });
        
            if(this.event_color != '')
            {
              this.event_color = colors.yellow;
            }
            else
            {
              this.event_color = colors.red;
            }  */
            if (meeting_dataObj.meeting_start_date != undefined || meeting_dataObj.meeting_start_date != null || meeting_dataObj.meeting_start_date != '') {
                console.log("push events if part called" + JSON.stringify(meeting_dataObj));
                _this.events = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.events, [
                    {
                        eventId: meeting_dataObj.eventId,
                        meeting_place: meeting_dataObj.meeting_place,
                        title: meeting_dataObj.meeting_purpose,
                        start: new Date(meeting_dataObj.meeting_start_date),
                        end: new Date(meeting_dataObj.meeting_end_date),
                        color: colors.red,
                        actions: _this.actions
                    }
                ]);
                var todays_date = new Date();
                var event_start_time = new Date(meeting_dataObj.meeting_start_date);
                var diffMs = (event_start_time - todays_date); // milliseconds between now & Christmas
                var diffDays = Math.floor(diffMs / 86400000); // days
                if (diffDays === 0) {
                    _this.todays_event = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.todays_event, [
                        {
                            eventId: meeting_dataObj.eventId,
                            meeting_place: meeting_dataObj.meeting_place,
                            title: meeting_dataObj.meeting_purpose,
                            start: new Date(meeting_dataObj.meeting_start_date),
                            end: new Date(meeting_dataObj.meeting_end_date),
                            color: colors.red,
                            actions: _this.actions
                        }
                    ]);
                }
                console.log("events are " + JSON.stringify(_this.events));
                _this.refresh.next();
            }
        };
        this.Update_meeting = function () {
            if (_this.update_meetings.title === undefined || _this.update_meetings.title === null || _this.update_meetings.title === '') {
                _this.toastr.warning("Please enter Metting Purpose");
            }
            else if (_this.update_meetings.meeting_place === undefined || _this.update_meetings.meeting_place === null || _this.update_meetings.meeting_place === '') {
                _this.toastr.warning("Please enter Meeting Place");
            }
            else if (_this.update_meetings.start === undefined || _this.update_meetings.start === null || _this.update_meetings.start === '') {
                _this.toastr.warning("Please select Meeting Start date time and meeting end date time");
            }
            else if (_this.update_meetings.end === undefined || _this.update_meetings.end === null || _this.update_meetings.end === '') {
                _this.toastr.warning("Please select Meeting end date and time");
            }
            else if (Date.parse(_this.update_meetings.start) >= Date.parse(_this.update_meetings.end)) {
                _this.toastr.warning("Please select proper sttart date and time");
            }
            else {
                _this.update_meetings.start = _this.update_meetings.start.setSeconds(0);
                _this.update_meetings.end = _this.update_meetings.end.setSeconds(0);
                var update_meeting_data_obj = {
                    eventId: _this.update_meetings.eventId,
                    meeting_purpose: _this.update_meetings.title,
                    meeting_place: _this.update_meetings.meeting_place,
                    meeting_start_date: _this.update_meetings.start,
                    meeting_end_date: _this.update_meetings.end,
                    meeting_created_for: _this.selected_userId
                };
                _this._eventser.update_meeting(update_meeting_data_obj);
                jquery__WEBPACK_IMPORTED_MODULE_9__(document).ready(function () {
                    var button_update_meetng = document.getElementById("update_close_btn");
                    button_update_meetng.click();
                });
            }
        };
        this.delete_event = false;
        this.getMeetings_from_admin = function () {
            _this._eventser.particular_user_meeting(_this.selected_userId)
                .subscribe(function (data) {
                if (data['action'] === "create") {
                    //alert("meeting created");
                    if ((data['meeting_created_by'] != _this.UserId) && (data['meeting_purpose'] != undefined || data['meeting_purpose'] != null || data['meeting_purpose'] != '') && data != 'You are ONline') {
                        var meeting_dataObj = {
                            eventId: data['eventId'],
                            meeting_created_by: data['meeting_created_by'],
                            meeting_purpose: data['meeting_purpose'],
                            meeting_place: data['meeting_place'],
                            meeting_start_date: data['meeting_start_date'],
                            meeting_end_date: data['meeting_end_date'],
                            meeting_created_for: data['meeting_created_by'],
                            createdOn: new Date()
                        };
                        _this.pushToEvents(meeting_dataObj);
                        // alert("meeting created");
                        data['meeting_start_date'] = new Date(data['meeting_start_date']);
                        data['meeting_end_date'] = new Date(data['meeting_end_date']);
                        _this.show_module_create_data = data;
                        console.log("meeting start date" + data['meeting_start_date']);
                        _this.modal.open(_this.alert_creation_module, { size: 'lg' });
                    }
                    else if ((data['meeting_created_by'] == _this.UserId) && (data['meeting_purpose'] != undefined || data['meeting_purpose'] != null || data['meeting_purpose'] != '') && data != 'You are ONline') {
                        var meeting_dataObj = {
                            eventId: data['eventId'],
                            meeting_created_by: data['meeting_created_by'],
                            meeting_purpose: data['meeting_purpose'],
                            meeting_place: data['meeting_place'],
                            meeting_start_date: data['meeting_start_date'],
                            meeting_end_date: data['meeting_end_date'],
                            meeting_created_for: data['meeting_created_by'],
                            createdOn: new Date()
                        };
                        _this.pushToEvents(meeting_dataObj);
                        _this.toastr.success("Meeting Scheduled Successfully");
                    }
                }
                else if (data['action'] === "update") {
                    _this.events = _this.events.map(function (iEvent) {
                        if (iEvent.eventId === data['eventId']) {
                            var updated_meeting_obj = {
                                meeting_purpose: data['meeting_purpose'],
                                meeting_place: data['meeting_place'],
                                meeting_start_date: data['meeting_start_date'],
                                meeting_end_date: data['meeting_end_date']
                            };
                            return {
                                title: updated_meeting_obj.meeting_purpose,
                                eventId: iEvent.eventId,
                                meeting_place: updated_meeting_obj.meeting_place,
                                start: new Date(updated_meeting_obj.meeting_start_date),
                                end: new Date(updated_meeting_obj.meeting_end_date),
                                color: colors.red,
                                actions: iEvent.actions
                            };
                        }
                        return iEvent;
                    });
                    if (_this.todays_past_events_ids.indexOf(data['eventId']) !== -1) {
                        for (var i = 0; i < _this.todays_past_events_ids.length; i++) {
                            if (_this.todays_past_events_ids[i] === data['eventId']) {
                                _this.todays_past_events_ids.splice(i, 1);
                                i--;
                            }
                        }
                    }
                    _this.todays_event = _this.todays_event.map(function (event) {
                        if (event.eventId === data['eventId']) {
                            var updated_meeting_obj = {
                                meeting_purpose: data['meeting_purpose'],
                                meeting_place: data['meeting_place'],
                                meeting_start_date: data['meeting_start_date'],
                                meeting_end_date: data['meeting_end_date'],
                            };
                            return {
                                title: updated_meeting_obj.meeting_purpose,
                                eventId: event.eventId,
                                meeting_place: updated_meeting_obj.meeting_place,
                                start: new Date(updated_meeting_obj.meeting_start_date),
                                end: new Date(updated_meeting_obj.meeting_end_date),
                                color: event.color,
                                actions: event.actions,
                                meeting_created_for: event.meeting_created_for,
                                meeting_created_by: event.meeting_created_by,
                                time_gone: event.time_gone
                            };
                        }
                        return event;
                    });
                    _this.refresh.next();
                    if (_this.M_P_UserType === 'admin') {
                        _this.toastr.success("Meeting is changed Successfully");
                    }
                    else {
                        //let converte_start_date = data['meeting_start_date'];
                        //console.log(converte_start_date);
                        //data['meeting_start_date'] = converte_start_date;
                        data['meeting_start_date'] = new Date(data['meeting_start_date']);
                        data['meeting_end_date'] = new Date(data['meeting_end_date']);
                        _this.show_module_change_data = data;
                        _this.modal.open(_this.alert_updation_module, { size: 'lg' });
                    }
                }
                else if (data['action'] === "delete") {
                    //alert("meeting deleted");
                    _this.events = _this.events.map(function (iEvent) {
                        if (iEvent.eventId === data['eventId']) {
                            _this.only_one_event_stroed = iEvent;
                            _this.delete_event = true;
                            //return false;
                        }
                        return iEvent;
                    });
                    _this.todays_event = _this.todays_event.map(function (event) {
                        if (event.eventId === data['eventId']) {
                            _this.only_todays_event_stroed = event;
                            _this.delete_todays_event = true;
                        }
                        return event;
                    });
                    if (_this.delete_event === true) {
                        _this.events = _this.events.filter(function (event) { return event !== _this.only_one_event_stroed; });
                    }
                    if (_this.delete_todays_event === true) {
                        _this.todays_event = _this.todays_event.filter(function (event) { return event !== _this.only_todays_event_stroed; });
                    }
                    _this.refresh.next();
                    if (_this.M_P_UserType === 'admin') {
                        _this.toastr.success("Meeting is deleted Successfully");
                    }
                    else {
                    }
                }
                else if (data['action'] == 'reminder') {
                    console.log("reminder");
                    if (data['meeting_created_for'] == _this.UserId && data['meeting_created_by'] != _this.UserId) {
                        var stat_time = new Date(data['start']);
                        _this.setAlarm(stat_time);
                        _this.reminder_data = data;
                        if (_this.todays_past_events_ids.indexOf(data['eventId']) !== -1) {
                        }
                        else {
                            _this.todays_past_events_ids.push(data['eventId']);
                        }
                        _this.todays_event = _this.todays_event.map(function (event) {
                            if (event.eventId === data['eventId']) {
                                return {
                                    title: event.meeting_purpose,
                                    eventId: event.eventId,
                                    meeting_place: event.meeting_place,
                                    start: event.start,
                                    end: event.end,
                                    color: event.color,
                                    actions: event.actions,
                                    meeting_created_for: event.meeting_created_for,
                                    meeting_created_by: event.meeting_created_by,
                                    time_gone: true
                                };
                            }
                            return event;
                        });
                        _this.refresh.next();
                    }
                }
            });
        };
        this.todays_past_events_ids = [];
        this.every_Minute_data = function () {
            /*let current_date = new Date();
            current_date.setSeconds(0);
        
            if(current_date.getMinutes() == 59)
            {
              current_date.setHours(current_date.getHours() + 1);
              current_date.setMinutes(0);
            } */
            //console.log(this.todays_event);
            // console.log(event.start);
            //console.log(current_date + " current date");
            _this.todays_event.map(function (event) {
                var todays_date = new Date();
                var event_start_time = new Date(event.start);
                var diffMs = (event_start_time - todays_date); // milliseconds between now & Christmas
                var diffDays = Math.floor(diffMs / 86400000); // days
                var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
                var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
                console.log("diff in days" + diffDays);
                console.log("diff in hours" + diffHrs);
                console.log(diffMins);
                if (_this.todays_past_events_ids.indexOf(event.eventId) !== -1) {
                    console.log("event id is in array" + event.eventId);
                }
                else {
                    if (todays_date.getDate() === event_start_time.getDate()) {
                        if ((diffDays === 0) && (diffHrs === 0) && (diffMins === 1 || diffMins === 0)) {
                            _this.todays_past_events_ids.push(event.eventId);
                            _this._eventser.getReminder(event);
                        }
                    }
                }
                /* if ((event.time_gone === false) && (event.start.getHours() === current_date.getHours()) && (event.start.getMinutes() === (current_date.getMinutes() + 1))) {
          
                  this._eventser.getReminder(event);
          
                } */
            });
        };
        this.setAlarm = function (start_date_and_time) {
            //alert();
            var ms = start_date_and_time;
            console.log(ms);
            if (isNaN(ms)) {
            }
            else {
                var alarm = new Date(ms);
                console.log("alarm" + alarm);
                var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
                console.log("alarm time " + alarmTime);
                var differenceInms = alarmTime.getTime() - (new Date()).getTime();
                //differenceInms = 60000;
                if (differenceInms > 0) {
                    alert('specified time is already passed');
                    return;
                }
                _this.time_out_data = setTimeout(_this.initAlarm, differenceInms);
            }
        };
        this.initAlarm = function () {
            //this.reminder_data.start;
            var start_m_ti = new Date(_this.reminder_data.start);
            console.log("reminder strat time" + start_m_ti);
            _this.modal.open(_this.event_notification, { size: 'lg', keyboard: false, backdrop: 'static' });
            var current_date_data = new Date();
            current_date_data.setSeconds(0);
            if (current_date_data.getMinutes() == 59) {
                current_date_data.setHours(current_date_data.getHours() + 1);
                current_date_data.setMinutes(0);
            }
            if ((current_date_data.getHours() == start_m_ti.getHours()) && (current_date_data.getMinutes() == start_m_ti.getMinutes())) {
                clearTimeout(_this.time_out_data);
            }
        };
        this.dismiss = function () {
            // this.modal.clo(this.event_notification, { size: 'lg', keyboard: false,backdrop: 'static'});
            console.log("dismiss");
            jquery__WEBPACK_IMPORTED_MODULE_9__(document).ready(function () {
                var event_notification_close = document.getElementById("event_notification_close_btn");
                event_notification_close.click();
            });
        };
        this.snooze = function () {
            jquery__WEBPACK_IMPORTED_MODULE_9__(document).ready(function () {
                var event_notification_close = document.getElementById("event_notification_close_btn");
                event_notification_close.click();
            });
            setTimeout(_this.initAlarm, 5000);
        };
        this.sub1 = rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].interval(30000)
            .subscribe(function (val) {
            _this.every_Minute_data();
            console.log('called');
        });
        this.datePickerConfig = Object.assign({}, {
            minDate: new Date(this.current_year_data, 0, 1),
            maxDate: new Date(this.current_year_data, 11, 31)
        });
    }
    ParticularUserEventComponent.prototype.ngOnInit = function () {
        this.selected_userId = this.actiroute.snapshot.paramMap.get("userId");
        this.M_P_AuthToken = this.cookie.get('M_P_AuthToken');
        this.UserId = this.cookie.get('UserId');
        this.UserName = this.cookie.get('UserName');
        this.M_P_UserType = this.cookie.get('M_P_UserType');
        this.userInfo = this._userservice.getLocalStorageUserinfo();
        this.checkstatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        if (this.M_P_UserType == 'admin') {
            this.sender_receiver_obj = {
                meeting_created_by: this.UserId,
                meeting_created_for: this.selected_userId
            };
        }
        else {
            this.sender_receiver_obj = {
                meeting_created_for: this.selected_userId
            };
        }
        this.todays_event_data(this.sender_receiver_obj);
        this.get_all_meetings_of_user(this.sender_receiver_obj, this.current_year_data, this.current_date_months);
        this.getMeetings_from_admin();
    };
    ParticularUserEventComponent.prototype.increment = function () {
        //alert();
        this.changeDate(addPeriod(this.view, this.viewDate, 1));
    };
    ParticularUserEventComponent.prototype.decrement = function () {
        //alert();
        this.changeDate(subPeriod(this.view, this.viewDate, 1));
    };
    ParticularUserEventComponent.prototype.today = function () {
        //alert();
        this.changeDate(new Date());
    };
    ParticularUserEventComponent.prototype.dateIsValid = function (date) {
        return date >= this.minDate && date <= this.maxDate;
    };
    ParticularUserEventComponent.prototype.changeDate = function (date) {
        this.viewDate = date;
        this.dateOrViewChanged();
    };
    ParticularUserEventComponent.prototype.changeView = function (view) {
        this.view = view;
        this.dateOrViewChanged();
        this.activeDayIsOpen = false;
    };
    ParticularUserEventComponent.prototype.dateOrViewChanged = function () {
        this.prevBtnDisabled = !this.dateIsValid(endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1)));
        this.nextBtnDisabled = !this.dateIsValid(startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1)));
        if (this.viewDate < this.minDate) {
            this.changeDate(this.minDate);
        }
        else if (this.viewDate > this.maxDate) {
            this.changeDate(this.maxDate);
        }
        var viewDateMonth = this.viewDate.getMonth();
        var ViewDateYear = this.viewDate.getFullYear();
        //alert(this.viewDate.getMonth();
        this.get_all_meetings_of_user(this.sender_receiver_obj, ViewDateYear, viewDateMonth);
    };
    ParticularUserEventComponent.prototype.beforeMonthViewRender = function (_a) {
        var _this = this;
        var body = _a.body;
        body.forEach(function (day) {
            if (!_this.dateIsValid(day.date)) {
                day.cssClass = 'cal-disabled';
            }
        });
    };
    ParticularUserEventComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["isSameDay"])(this.viewDate, date)) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    ParticularUserEventComponent.prototype.handleEvent = function (action, event) {
        if (action === 'Clicked') {
            event.start = new Date(event.start);
            event.end = new Date(event.end);
            this.modalData = { event: event, action: action };
            this.view_Content = event;
            this.modal.open(this.View_meeting_data, { size: 'lg', keyboard: false, backdrop: 'static' });
        }
        else if (action === 'Edited') {
            event.start = new Date(event.start);
            event.end = new Date(event.end);
            this.modalData = { event: event, action: action };
            this.update_meetings = event;
            this.modal.open(this.update_meeting_form, { size: 'lg', keyboard: false, backdrop: 'static' });
        }
        else if (action === 'Deleted') {
            this.modalData = { event: event, action: action };
            this.modal.open(this.delete_confirm, { size: 'lg', keyboard: false, backdrop: 'static' });
        }
    };
    ParticularUserEventComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    ParticularUserEventComponent.prototype.setView = function (view) {
        this.view = view;
    };
    ParticularUserEventComponent.prototype.addEvent_form = function () {
        this.modal.open(this.modalContent_form, { size: 'lg', keyboard: false, backdrop: 'static' });
    };
    ParticularUserEventComponent.prototype.confirm_delete = function (eventId) {
        //alert(eventId);
        var some_data = {
            eventId: eventId,
            meeting_created_for: this.selected_userId
        };
        this._eventser.delete_meeting(some_data);
        var button_delete_meetng = document.getElementById("delete_close_btn");
        button_delete_meetng.click();
    };
    ParticularUserEventComponent.prototype.confirm_decline = function () {
        var button_delete_meetng = document.getElementById("delete_close_btn");
        button_delete_meetng.click();
    };
    ParticularUserEventComponent.prototype.create_meeting_form = function () {
        //alert(this.meeting_date);
        if (this.meeting_purpose === undefined || this.meeting_purpose === null || this.meeting_purpose === '') {
            this.toastr.warning("Please enter Metting Purpose");
        }
        else if (this.meeting_place === undefined || this.meeting_place === null || this.meeting_place === '') {
            this.toastr.warning("Please enter Meeting Place");
        }
        else if (this.meeting_date === undefined || this.meeting_date === null || this.meeting_date === '') {
            this.toastr.warning("Please select Meeting Start date time and meeting end date time");
        }
        else if (this.meeting_end_date === undefined || this.meeting_end_date === null || this.meeting_end_date === '') {
            this.toastr.warning("Please select meeting End date and meeting end time");
        }
        else if (Date.parse(this.meeting_date) > Date.parse(this.meeting_end_date)) {
            this.toastr.warning("Please select propert strat and end date time.");
        }
        else {
            this.meeting_date = this.meeting_date.setSeconds(0);
            this.meeting_end_date = this.meeting_end_date.setSeconds(0);
            var meeting_dataObj = {
                meeting_created_by: this.UserId,
                meeting_purpose: this.meeting_purpose,
                meeting_place: this.meeting_place,
                meeting_start_date: this.meeting_date,
                meeting_created_for: this.selected_userId,
                meeting_end_date: this.meeting_end_date,
                createdOn: new Date()
            };
            this._eventser.Create_Mettting(meeting_dataObj);
            jquery__WEBPACK_IMPORTED_MODULE_9__(document).ready(function () {
                var button_create_meetng = document.getElementById("create_close_btn");
                button_create_meetng.click();
            });
        }
    };
    ParticularUserEventComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_event_service_service__WEBPACK_IMPORTED_MODULE_2__["EventServiceService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
    ], ParticularUserEventComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent_form', { static: true })
    ], ParticularUserEventComponent.prototype, "modalContent_form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('View_meeting_data', { static: true })
    ], ParticularUserEventComponent.prototype, "View_meeting_data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('update_meeting_form', { static: true })
    ], ParticularUserEventComponent.prototype, "update_meeting_form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('delete_confirm', { static: true })
    ], ParticularUserEventComponent.prototype, "delete_confirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alert_creation_module', { static: true })
    ], ParticularUserEventComponent.prototype, "alert_creation_module", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alert_updation_module', { static: true })
    ], ParticularUserEventComponent.prototype, "alert_updation_module", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('event_notification', { static: true })
    ], ParticularUserEventComponent.prototype, "event_notification", void 0);
    ParticularUserEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! raw-loader!./particular-user-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/event/particular-user-event/particular-user-event.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./particular-user-event.component.css */ "./src/app/event/particular-user-event/particular-user-event.component.css")]
        })
    ], ParticularUserEventComponent);
    return ParticularUserEventComponent;
}());



/***/ }),

/***/ "./src/app/event/user-event/user-event.component.css":
/*!***********************************************************!*\
  !*** ./src/app/event/user-event/user-event.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendar_header\r\n{\r\n    padding-top : 2% !important;\r\n}\r\n\r\n.cal-disabled {\r\n    background-color: #eee;\r\n    pointer-events: none;\r\n  }\r\n\r\n.cal-disabled .cal-day-number {\r\n    opacity: 0.1;\r\n  }\r\n\r\n.btn-primary {\r\n    color : #fff !important;\r\n    background-color: #6c757d !important;\r\n    border-color:#6c757d!important;\r\n  }\r\n\r\n.btn\r\n  {\r\n     /*margin: 2% !important;  */\r\n     border-radius: 0rem;\r\n  }\r\n\r\n.btn-primary:not(:disabled):not(.disabled).active,\r\n  .btn-primary:not(:disabled):not(.disabled):active{\r\n\r\n    color : #fff !important;\r\n    background-color: darkgray !important;\r\n    border-color:darkgray!important;\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvdXNlci1ldmVudC91c2VyLWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsOEJBQThCO0VBQ2hDOztBQUVBOztLQUVHLDJCQUEyQjtLQUMzQixtQkFBbUI7RUFDdEI7O0FBRUE7OztJQUdFLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsK0JBQStCOztFQUVqQyIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L3VzZXItZXZlbnQvdXNlci1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyX2hlYWRlclxyXG57XHJcbiAgICBwYWRkaW5nLXRvcCA6IDIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWwtZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY2FsLWRpc2FibGVkIC5jYWwtZGF5LW51bWJlciB7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgY29sb3IgOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IzZjNzU3ZCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuXHJcbiAge1xyXG4gICAgIC8qbWFyZ2luOiAyJSAhaW1wb3J0YW50OyAgKi9cclxuICAgICBib3JkZXItcmFkaXVzOiAwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuICAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZle1xyXG5cclxuICAgIGNvbG9yIDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjpkYXJrZ3JheSFpbXBvcnRhbnQ7XHJcblxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/event/user-event/user-event.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/event/user-event/user-event.component.ts ***!
  \**********************************************************/
/*! exports provided: UserEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventComponent", function() { return UserEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_event_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/event-service.service */ "./src/app/event-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");












//import { $ } from 'protractor';
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
function addPeriod(period, date, amount) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_9__["addDays"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_9__["addWeeks"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_9__["addMonths"]
    }[period](date, amount);
}
function subPeriod(period, date, amount) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_9__["subDays"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_9__["subWeeks"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_9__["subMonths"]
    }[period](date, amount);
}
function startOfPeriod(period, date) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfDay"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfWeek"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfMonth"]
    }[period](date);
}
function endOfPeriod(period, date) {
    return {
        day: date_fns__WEBPACK_IMPORTED_MODULE_9__["endOfDay"],
        week: date_fns__WEBPACK_IMPORTED_MODULE_9__["endOfWeek"],
        month: date_fns__WEBPACK_IMPORTED_MODULE_9__["endOfMonth"]
    }[period](date);
}
var UserEventComponent = /** @class */ (function () {
    function UserEventComponent(actiroute, modal, _userservice, _router, _eventser, toastr, cookie) {
        var _this = this;
        this.actiroute = actiroute;
        this.modal = modal;
        this._userservice = _userservice;
        this._router = _router;
        this._eventser = _eventser;
        this.toastr = toastr;
        this.cookie = cookie;
        this.view = 'month';
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarView"];
        this.viewDate = new Date();
        //events: CalendarEvent[] = [];
        this.current_date = new Date();
        this.current_date_months = new Date().getMonth();
        this.current_year_data = new Date().getFullYear();
        this.min_new_date = new Date("Januaru 1, " + this.current_year_data + " 00:00:00");
        this.max_new_date = new Date("December 31, " + this.current_year_data + " 00:00:00");
        this.minDate = this.min_new_date;
        this.maxDate = this.max_new_date;
        this.prevBtnDisabled = false;
        this.nextBtnDisabled = false;
        this.userList = [];
        this.meeting_list = [];
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.events = [
        /*{
          start: subDays(startOfDay(new Date()), 1),
          end: addDays(new Date(), 1),
          title: 'A 3 day event',
          color: colors.red,
          actions: this.actions,
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        },
        {
          start: startOfDay(new Date()),
          title: 'An event with no end date',
          color: colors.yellow,
          actions: this.actions
        },
        {
          start: subDays(endOfMonth(new Date()), 3),
          end: addDays(endOfMonth(new Date()), 3),
          title: 'A long event that spans 2 months',
          color: colors.blue,
          allDay: true
        },
        {
          start: addHours(startOfDay(new Date()), 2),
          end: new Date(),
          title: 'A draggable and resizable event',
          color: colors.yellow,
          actions: this.actions,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        } */
        ];
        this.activeDayIsOpen = false;
        this.checkstatus = function () {
            if (_this.M_P_AuthToken === undefined || _this.M_P_AuthToken === null || _this.M_P_AuthToken === '') {
                _this._router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        };
        this.verifyUserConfirmation = function () {
            _this._eventser.verifyUSer().subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this._eventser.setUser(_this.M_P_AuthToken);
            });
        };
        this.getOnlineUserList = function () {
            _this._eventser.onlineUSerList().subscribe(function (userList1) {
                //alert(JSON.stringify(userList1));
                _this.userList = [];
                for (var x in userList1) {
                    var user = { userId: userList1[x]['userId'], userName: userList1[x]['fullname'] };
                    _this.userList.push(user);
                    console.log(_this.userList);
                }
            });
        };
        this.get_meetings = function (sender_receiver_obj) {
            _this._eventser.meeting_list().subscribe(function (userList1) {
                for (var x_get_all_met in userList1) {
                    if (userList1['x_get_all_met']['meeting_created_for'] == _this.selected_userId) {
                        _this.events = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.events, [
                            userList1['x_get_all_met']
                        ]);
                    }
                }
            });
        };
        this.edit_profile = function () {
            _this._router.navigate(['/edit-profile', _this.UserId]);
        };
        this.logout = function () {
            //alert();
            var logged_in_userId = _this.cookie.get('UserId');
            var userId_data = {
                userId: logged_in_userId
            };
            _this._eventser.Logout(userId_data).subscribe(function (apiResponse) {
                //alert(apiResponse);
                if (apiResponse['status'] == 200) {
                    _this.cookie.delete('M_P_AuthToken');
                    _this.cookie.delete('UserId');
                    _this.cookie.delete('UserName');
                    _this.cookie.delete('M_P_UserType');
                    _this._userservice.setUserInfoLocalStorage("");
                    _this._router.navigate(['/']);
                    _this.toastr.success(apiResponse['message']);
                }
                else {
                    _this.toastr.warning(apiResponse['message']);
                }
            });
        };
        this.pushToEvents = function (meeting_dataObj) {
            _this.events = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.events, [
                {
                    title: meeting_dataObj.meeting_purpose,
                    start: new Date(meeting_dataObj.meeting_start_date),
                    end: new Date(meeting_dataObj.meeting_start_date),
                    color: colors.red,
                    draggable: true,
                    resizable: {
                        beforeStart: true,
                        afterEnd: true
                    }
                }
            ]);
        };
        this.getMeetings_from_admin = function () {
            alert();
            _this._eventser.particular_user_meeting(_this.selected_userId)
                .subscribe(function (data) {
                alert(data);
                _this.events = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.events, [
                    data
                ]);
                console.log(_this.events);
            });
        };
        this.datePickerConfig = Object.assign({}, {
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2019, 11, 31)
        });
    }
    UserEventComponent.prototype.ngOnInit = function () {
        this.selected_userId = this.actiroute.snapshot.paramMap.get("userId");
        //alert(this.selected_userId);
        this.M_P_AuthToken = this.cookie.get('M_P_AuthToken');
        this.UserId = this.cookie.get('UserId');
        this.UserName = this.cookie.get('UserName');
        this.M_P_UserType = this.cookie.get('M_P_UserType');
        this.userInfo = this._userservice.getLocalStorageUserinfo();
        this.checkstatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        var sender_receiver_obj = {
            meeting_created_by: this.UserId,
            meeting_created_for: this.selected_userId
        };
        this.get_meetings(sender_receiver_obj);
        this.getMeetings_from_admin();
    };
    UserEventComponent.prototype.increment = function () {
        this.changeDate(addPeriod(this.view, this.viewDate, 1));
    };
    UserEventComponent.prototype.decrement = function () {
        this.changeDate(subPeriod(this.view, this.viewDate, 1));
    };
    UserEventComponent.prototype.today = function () {
        this.changeDate(new Date());
    };
    UserEventComponent.prototype.dateIsValid = function (date) {
        return date >= this.minDate && date <= this.maxDate;
    };
    UserEventComponent.prototype.changeDate = function (date) {
        this.viewDate = date;
        this.dateOrViewChanged();
    };
    UserEventComponent.prototype.changeView = function (view) {
        this.view = view;
        this.dateOrViewChanged();
        this.activeDayIsOpen = false;
    };
    UserEventComponent.prototype.dateOrViewChanged = function () {
        this.prevBtnDisabled = !this.dateIsValid(endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1)));
        this.nextBtnDisabled = !this.dateIsValid(startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1)));
        if (this.viewDate < this.minDate) {
            this.changeDate(this.minDate);
        }
        else if (this.viewDate > this.maxDate) {
            this.changeDate(this.maxDate);
        }
    };
    UserEventComponent.prototype.beforeMonthViewRender = function (_a) {
        var _this = this;
        var body = _a.body;
        body.forEach(function (day) {
            if (!_this.dateIsValid(day.date)) {
                day.cssClass = 'cal-disabled';
            }
        });
    };
    UserEventComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    UserEventComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    };
    UserEventComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    UserEventComponent.prototype.addEvent = function () {
        this.events = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.events, [
            {
                title: 'New event',
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["endOfDay"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ]);
    };
    UserEventComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    UserEventComponent.prototype.setView = function (view) {
        this.view = view;
    };
    UserEventComponent.prototype.addEvent_form = function () {
        this.modal.open(this.modalContent_form, { size: 'lg' });
    };
    UserEventComponent.prototype.create_meeting_form = function () {
        if (this.meeting_purpose === undefined || this.meeting_purpose === null || this.meeting_purpose === '') {
            this.toastr.warning("Please enter Metting Purpose");
        }
        else if (this.meeting_place === undefined || this.meeting_place === null || this.meeting_place === '') {
            this.toastr.warning("Please enter Meeting Place");
        }
        else if (this.meeting_date === undefined || this.meeting_date === null || this.meeting_date === '') {
            this.toastr.warning("Please select Meeting Start date time and meeting end date time");
        }
        else {
            var meeting_dataObj = {
                meeting_created_by: this.UserId,
                meeting_purpose: this.meeting_purpose,
                meeting_place: this.meeting_place,
                meeting_start_date: this.meeting_date,
                meeting_created_for: this.selected_userId,
                createdOn: new Date()
            };
            this._eventser.Create_Mettting(meeting_dataObj);
            jquery__WEBPACK_IMPORTED_MODULE_7__(document).ready(function () {
                var button_create_meetng = document.getElementById("create_close_btn");
                button_create_meetng.click();
            });
            this.pushToEvents(meeting_dataObj);
        }
    };
    UserEventComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_event_service_service__WEBPACK_IMPORTED_MODULE_2__["EventServiceService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
    ], UserEventComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent_form', { static: true })
    ], UserEventComponent.prototype, "modalContent_form", void 0);
    UserEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! raw-loader!./user-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/event/user-event/user-event.component.html"),
            styles: [__webpack_require__(/*! ./user-event.component.css */ "./src/app/event/user-event/user-event.component.css")]
        })
    ], UserEventComponent);
    return UserEventComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = "http://api.npatelproject.site/api/v1/users";
        this.setUserInfoLocalStorage = function (data) {
            localStorage.setItem('M_P_userInfo', JSON.stringify(data));
        };
        this.getLocalStorageUserinfo = function () {
            localStorage.getItem('M_P_userInfo');
        };
        this.LoginFun = function (LoginParams) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', LoginParams.email)
                .set('password', LoginParams.password);
            var response = _this._http.post(_this.baseUrl + "/login", params);
            //alert(response);
            return response;
        };
        this.getCountry_ = function () {
            var c_l = "http://country.io/names.json";
            var response = _this._http.post("" + c_l, '');
            //alert(JSON.stringify(response));
            return response;
        };
        this.ForgotPwd = function (params) {
            var dat = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', params.email);
            var response = _this._http.post(_this.baseUrl + "/forgot-password", dat);
            return response;
        };
        this.getemail_from_token = function (token) {
            var data = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('Token', token.Token);
            //alert(data);
            var response = _this._http.post(_this.baseUrl + "/get-email", data);
            return response;
        };
        this.recover_pwd = function (params) {
            var data = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', params.email)
                .set('password', params.password);
            //alert(data);
            var response = _this._http.post(_this.baseUrl + "/recover-password", data);
            return response;
        };
        this.signUp = function (signup_data) {
            var data = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', signup_data.email)
                .set('password', signup_data.password)
                .set('firstName', signup_data.firstname)
                .set('lastName', signup_data.lastName)
                .set('mobileNumber', signup_data.mobileNumber)
                .set('country_code', signup_data.country_code)
                .set('country_name', signup_data.country_name);
            var reponse = _this._http.post(_this.baseUrl + "/signUp", data);
            return reponse;
        };
        this.verify_useer_token = function (token_data) {
            var t_data = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('Token', token_data.Token);
            //alert(t_data);
            var reponse = _this._http.post(_this.baseUrl + "/Verify-User", t_data);
            return reponse;
        };
        this.get_single_user_data = function (userId) {
            var apiResponse = _this._http.get(_this.baseUrl + "/" + userId + "/singleUSer");
            return apiResponse;
        };
        this.edit_profile_htp = function (user_id, User_data) {
            var get_perticular_data = _this._http.put(_this.baseUrl + '/' + user_id + '/edit-profile', User_data);
            console.log(get_perticular_data);
            return get_perticular_data;
        };
        this.change_Pwd = function (change_pwd_data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('old_password', change_pwd_data.old_password)
                .set('userId', change_pwd_data.userId)
                .set('new_password', change_pwd_data.new_password);
            console.log(params);
            var reponse = _this._http.post(_this.baseUrl + "/change-password", params);
            return reponse;
        };
    }
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/change-password/change-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_header {\r\n    background-color : lightgrey;\r\n    padding : 2%;\r\n    font-size : 2rem;\r\n}\r\n\r\n.form_middle {\r\n    width : 35%;\r\n    margin-top : 5%;\r\n    border-style: solid;\r\n    border-width: medium;\r\n    padding : 2%;\r\n    border-radius : 25px;\r\n    position: fixed;\r\n    left: 32%;\r\n    border-color : lightgrey;\r\n    top : 20%;\r\n}\r\n\r\n.form_header{\r\n    text-align :center;\r\n    margin:2%;\r\n}\r\n\r\n.form-group .form-control {\r\n    width : 100%;\r\n    left : 25% !important;\r\n    \r\n}\r\n\r\n.form-group label {\r\n    color : lightgrey;\r\n}\r\n\r\n.btn_width{\r\n    \r\n    border-color:lightgrey;\r\n    width:100%;\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n\r\n.form-control {\r\n    color: black;\r\n}\r\n\r\n.create-account{\r\n    text-align: center;\r\n    padding-top : 5%;\r\n}\r\n\r\n.forgot-password-link{\r\n    \r\n    padding-top : 2%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n/* The message box is shown when the user clicks on the password field */\r\n\r\n/* #message {\r\n     display:none;  \r\n    background: #f1f1f1;\r\n    color: #000;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  #message p {\r\n    padding: 10px 35px;\r\n    font-size: 18px;\r\n  } */\r\n\r\n/* Add a green text color and a checkmark when the requirements are right */\r\n\r\n.valid {\r\n    color: green;\r\n  }\r\n\r\n.valid:before {\r\n    position: relative;\r\n    content: \"✔\";\r\n  }\r\n\r\n/* Add a red text color and an \"x\" when the requirements are wrong */\r\n\r\n.invalid {\r\n    color: red;\r\n  }\r\n\r\n.invalid:before {\r\n    position: relative;\r\n    \r\n    content: \"✖\";\r\n  }\r\n\r\n.message {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n  }\r\n\r\n.message .tooltiptext {\r\n    visibility: hidden;\r\n    width: 400px;\r\n    background-color : rgba(58, 56, 56, 0.5);\r\n    color: #fff;\r\n    text-align: left;\r\n    border-radius: 6px;\r\n    padding : 15px;\r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n    \r\n    top: -100%;\r\n    left: 50%; \r\n    margin-left: -60px;\r\n\r\n  }\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n  }\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n  \r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCOztBQUV6Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTs7SUFFSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBLHdFQUF3RTs7QUFDeEU7Ozs7Ozs7Ozs7OztLQVlLOztBQUVILDJFQUEyRTs7QUFDM0U7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztBQUVBLG9FQUFvRTs7QUFDcEU7SUFDRSxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxrQkFBa0I7O0lBRWxCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0VBQ2pDOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjs7RUFFcEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLCtCQUErQjtFQUNqQzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7O0lBRWQseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BfaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiBsaWdodGdyZXk7XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbiAgICBmb250LXNpemUgOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybV9taWRkbGUge1xyXG4gICAgd2lkdGggOiAzNSU7XHJcbiAgICBtYXJnaW4tdG9wIDogNSU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbiAgICBwYWRkaW5nIDogMiU7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMjVweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDMyJTtcclxuICAgIGJvcmRlci1jb2xvciA6IGxpZ2h0Z3JleTtcclxuICAgIHRvcCA6IDIwJTtcclxufVxyXG4uZm9ybV9oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduIDpjZW50ZXI7XHJcbiAgICBtYXJnaW46MiU7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICBsZWZ0IDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBjb2xvciA6IGxpZ2h0Z3JleTtcclxufVxyXG4uYnRuX3dpZHRoe1xyXG4gICAgXHJcbiAgICBib3JkZXItY29sb3I6bGlnaHRncmV5O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVx0XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY3JlYXRlLWFjY291bnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcCA6IDUlO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkLWxpbmt7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wIDogMiU7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLyogVGhlIG1lc3NhZ2UgYm94IGlzIHNob3duIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwYXNzd29yZCBmaWVsZCAqL1xyXG4vKiAjbWVzc2FnZSB7XHJcbiAgICAgZGlzcGxheTpub25lOyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgI21lc3NhZ2UgcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC8qIEFkZCBhIGdyZWVuIHRleHQgY29sb3IgYW5kIGEgY2hlY2ttYXJrIHdoZW4gdGhlIHJlcXVpcmVtZW50cyBhcmUgcmlnaHQgKi9cclxuICAudmFsaWQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAudmFsaWQ6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbnRlbnQ6IFwi4pyUXCI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIHJlZCB0ZXh0IGNvbG9yIGFuZCBhbiBcInhcIiB3aGVuIHRoZSByZXF1aXJlbWVudHMgYXJlIHdyb25nICovXHJcbiAgLmludmFsaWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmludmFsaWQ6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgY29udGVudDogXCLinJZcIjtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSg1OCwgNTYsIDU2LCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZyA6IDE1cHg7XHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIFxyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIGxlZnQ6IDUwJTsgXHJcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICBcclxuICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_event_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/event-service.service */ "./src/app/event-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);







//import { Router } from '@angular/router';

var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(actiroute, _userservice, _router, _eventser, toastr, cookie) {
        var _this = this;
        this.actiroute = actiroute;
        this._userservice = _userservice;
        this._router = _router;
        this._eventser = _eventser;
        this.toastr = toastr;
        this.cookie = cookie;
        this.checkstatus = function () {
            if (_this.M_P_AuthToken === undefined || _this.M_P_AuthToken === null || _this.M_P_AuthToken === '') {
                _this._router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        };
        this.PassRequirements = function (myInput) {
            var letter = document.getElementById("letter");
            var capital = document.getElementById("capital");
            var number = document.getElementById("number");
            var length = document.getElementById("length");
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            }
            else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }
            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if (myInput.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            }
            else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }
            // Validate numbers
            var numbers = /[0-9]/g;
            if (myInput.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            }
            else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }
            // Validate length
            if (myInput.length >= 7 && myInput.length <= 14) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            }
            else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
        };
        this.edit_profile = function () {
            _this._router.navigate(['/edit-profile', _this.UserId]);
        };
        this.change_password = function () {
            _this._router.navigate(['/change-password', _this.UserId]);
        };
        this.logout = function () {
            var logged_in_userId = _this.cookie.get('UserId');
            var userId_data = {
                userId: logged_in_userId
            };
            _this._eventser.Logout(userId_data).subscribe(function (apiResponse) {
                //alert(apiResponse);
                if (apiResponse['status'] == 200) {
                    _this.cookie.delete('M_P_AuthToken');
                    _this.cookie.delete('UserId');
                    _this.cookie.delete('UserName');
                    _this.cookie.delete('M_P_UserType');
                    _this._userservice.setUserInfoLocalStorage("");
                    _this._router.navigate(['/login']);
                    _this.toastr.success(apiResponse['message']);
                }
                else {
                    _this.toastr.warning(apiResponse['message']);
                }
            });
        };
        this.change_password_data = function () {
            if (_this.old_password === undefined || _this.old_password === null || _this.old_password === '') {
                _this.toastr.warning("Please enter old password");
            }
            else if (_this.new_password === undefined || _this.new_password === null || _this.new_password === '') {
                _this.toastr.warning("Please enter new password");
            }
            else if (_this.repeat_new_password === undefined || _this.repeat_new_password === null || _this.repeat_new_password === '') {
                _this.toastr.warning("Please enter repeat password");
            }
            else if (_this.new_password != _this.repeat_new_password) {
                _this.toastr.warning("New password and repeate new password does not match");
            }
            else {
                var change_pwd_params = {
                    old_password: _this.old_password,
                    new_password: _this.new_password,
                    userId: _this.UserId
                };
                _this._userservice.change_Pwd(change_pwd_params).subscribe(function (apiResponse) {
                    if (apiResponse['status'] == 200) {
                        _this.toastr.success(apiResponse['message']);
                    }
                    else {
                        _this.toastr.error(apiResponse['message']);
                    }
                });
            }
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.M_P_AuthToken = this.cookie.get('M_P_AuthToken');
        this.UserId = this.cookie.get('UserId');
        this.UserName = this.cookie.get('UserName');
        this.M_P_UserType = this.cookie.get('M_P_UserType');
        this.userInfo = this._userservice.getLocalStorageUserinfo();
        this.checkstatus();
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_7__("#exampleInputPassword1").focus(function () {
                document.getElementById("tooltiptext").style.visibility = "visible";
            });
            jquery__WEBPACK_IMPORTED_MODULE_7__("#exampleInputPassword1").blur(function () {
                document.getElementById("tooltiptext").style.visibility = "hidden";
            });
        });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_event_service_service__WEBPACK_IMPORTED_MODULE_3__["EventServiceService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/user/change-password/change-password.component.css")]
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-profile/edit-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/edit-profile/edit-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_header {\r\n    background-color : lightgrey;\r\n    padding : 2%;\r\n    font-size : 2rem;\r\n}\r\n\r\n.form_middle {\r\n    width : 35%;\r\n    margin-top : 5%;\r\n    border-style: solid;\r\n    border-width: medium;\r\n    padding : 2%;\r\n    border-radius : 25px;\r\n    position: fixed;\r\n    left: 32%;\r\n    border-color : lightgrey;\r\n    top : 20%;\r\n}\r\n\r\n.form_header{\r\n    text-align :center;\r\n    margin:2%;\r\n}\r\n\r\n.form-group .form-control {\r\n    width : 100%;\r\n    left : 25% !important;\r\n    \r\n}\r\n\r\n.form-group label {\r\n    color : lightgrey;\r\n}\r\n\r\n.btn_width{\r\n    \r\n    border-color:lightgrey;\r\n    width:100%;\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n\r\n.form-control {\r\n    color: black;\r\n}\r\n\r\n.create-account{\r\n    text-align: center;\r\n    padding-top : 5%;\r\n}\r\n\r\n.forgot-password-link{\r\n    \r\n    padding-top : 2%;\r\n    font-size: 0.9rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCOztBQUV6Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTs7SUFFSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wX2hlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogbGlnaHRncmV5O1xyXG4gICAgcGFkZGluZyA6IDIlO1xyXG4gICAgZm9udC1zaXplIDogMnJlbTtcclxufVxyXG5cclxuLmZvcm1fbWlkZGxlIHtcclxuICAgIHdpZHRoIDogMzUlO1xyXG4gICAgbWFyZ2luLXRvcCA6IDUlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xyXG4gICAgcGFkZGluZyA6IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAzMiU7XHJcbiAgICBib3JkZXItY29sb3IgOiBsaWdodGdyZXk7XHJcbiAgICB0b3AgOiAyMCU7XHJcbn1cclxuLmZvcm1faGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbiA6Y2VudGVyO1xyXG4gICAgbWFyZ2luOjIlO1xyXG59XHJcbi5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gICAgbGVmdCA6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgY29sb3IgOiBsaWdodGdyZXk7XHJcbn1cclxuLmJ0bl93aWR0aHtcclxuICAgIFxyXG4gICAgYm9yZGVyLWNvbG9yOmxpZ2h0Z3JleTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cdFxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNyZWF0ZS1hY2NvdW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3AgOiA1JTtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZC1saW5re1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLXRvcCA6IDIlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/edit-profile/edit-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-profile/edit-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_event_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/event-service.service */ "./src/app/event-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);







//import { Router } from '@angular/router';

var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(actiroute, _userservice, _router, _eventser, toastr, cookie) {
        var _this = this;
        this.actiroute = actiroute;
        this._userservice = _userservice;
        this._router = _router;
        this._eventser = _eventser;
        this.toastr = toastr;
        this.cookie = cookie;
        this.getcountryname = function (cntr_name) {
            //alert(cntr_name);
            var all_abbr_code = { "BD": "880", "BE": "32", "BF": "226", "BG": "359", "BA": "387", "BB": "+1-246", "WF": "681", "BL": "590", "BM": "+1-441", "BN": "673", "BO": "591", "BH": "973", "BI": "257", "BJ": "229", "BT": "975", "JM": "+1-876", "BV": "", "BW": "267", "WS": "685", "BQ": "599", "BR": "55", "BS": "+1-242", "JE": "+44-1534", "BY": "375", "BZ": "501", "RU": "7", "RW": "250", "RS": "381", "TL": "670", "RE": "262", "TM": "993", "TJ": "992", "RO": "40", "TK": "690", "GW": "245", "GU": "+1-671", "GT": "502", "GS": "", "GR": "30", "GQ": "240", "GP": "590", "JP": "81", "GY": "592", "GG": "+44-1481", "GF": "594", "GE": "995", "GD": "+1-473", "GB": "44", "GA": "241", "SV": "503", "GN": "224", "GM": "220", "GL": "299", "GI": "350", "GH": "233", "OM": "968", "TN": "216", "JO": "962", "HR": "385", "HT": "509", "HU": "36", "HK": "852", "HN": "504", "HM": " ", "VE": "58", "PR": "+1-787 and 1-939", "PS": "970", "PW": "680", "PT": "351", "SJ": "47", "PY": "595", "IQ": "964", "PA": "507", "PF": "689", "PG": "675", "PE": "51", "PK": "92", "PH": "63", "PN": "870", "PL": "48", "PM": "508", "ZM": "260", "EH": "212", "EE": "372", "EG": "20", "ZA": "27", "EC": "593", "IT": "39", "VN": "84", "SB": "677", "ET": "251", "SO": "252", "ZW": "263", "SA": "966", "ES": "34", "ER": "291", "ME": "382", "MD": "373", "MG": "261", "MF": "590", "MA": "212", "MC": "377", "UZ": "998", "MM": "95", "ML": "223", "MO": "853", "MN": "976", "MH": "692", "MK": "389", "MU": "230", "MT": "356", "MW": "265", "MV": "960", "MQ": "596", "MP": "+1-670", "MS": "+1-664", "MR": "222", "IM": "+44-1624", "UG": "256", "TZ": "255", "MY": "60", "MX": "52", "IL": "972", "FR": "33", "IO": "246", "SH": "290", "FI": "358", "FJ": "679", "FK": "500", "FM": "691", "FO": "298", "NI": "505", "NL": "31", "NO": "47", "NA": "264", "VU": "678", "NC": "687", "NE": "227", "NF": "672", "NG": "234", "NZ": "64", "NP": "977", "NR": "674", "NU": "683", "CK": "682", "XK": "", "CI": "225", "CH": "41", "CO": "57", "CN": "86", "CM": "237", "CL": "56", "CC": "61", "CA": "1", "CG": "242", "CF": "236", "CD": "243", "CZ": "420", "CY": "357", "CX": "61", "CR": "506", "CW": "599", "CV": "238", "CU": "53", "SZ": "268", "SY": "963", "SX": "599", "KG": "996", "KE": "254", "SS": "211", "SR": "597", "KI": "686", "KH": "855", "KN": "+1-869", "KM": "269", "ST": "239", "SK": "421", "KR": "82", "SI": "386", "KP": "850", "KW": "965", "SN": "221", "SM": "378", "SL": "232", "SC": "248", "KZ": "7", "KY": "+1-345", "SG": "65", "SE": "46", "SD": "249", "DO": "+1-809 and 1-829", "DM": "+1-767", "DJ": "253", "DK": "45", "VG": "+1-284", "DE": "49", "YE": "967", "DZ": "213", "US": "1", "UY": "598", "YT": "262", "UM": "1", "LB": "961", "LC": "+1-758", "LA": "856", "TV": "688", "TW": "886", "TT": "+1-868", "TR": "90", "LK": "94", "LI": "423", "LV": "371", "TO": "676", "LT": "370", "LU": "352", "LR": "231", "LS": "266", "TH": "66", "TF": "", "TG": "228", "TD": "235", "TC": "+1-649", "LY": "218", "VA": "379", "VC": "+1-784", "AE": "971", "AD": "376", "AG": "+1-268", "AF": "93", "AI": "+1-264", "VI": "+1-340", "IS": "354", "IR": "98", "AM": "374", "AL": "355", "AO": "244", "AQ": "", "AS": "+1-684", "AR": "54", "AU": "61", "AT": "43", "AW": "297", "IN": "91", "AX": "+358-18", "AZ": "994", "IE": "353", "ID": "62", "UA": "380", "QA": "974", "MZ": "258" };
            var abbr_code_keys = Object.keys(all_abbr_code);
            var abbr_Code_vals = Object.values(all_abbr_code);
            var abbr_code_entries = Object.entries(all_abbr_code);
            for (var x in abbr_code_entries) {
                if (abbr_code_entries[x][0] == cntr_name) {
                    _this.cntry_code = abbr_code_entries[x][1];
                    return _this.single_user_data.country_code = _this.cntry_code, _this.single_user_data.cntry_code_length = _this.cntry_code.length;
                }
            }
        };
        this.checkstatus = function () {
            if (_this.M_P_AuthToken === undefined || _this.M_P_AuthToken === null || _this.M_P_AuthToken === '') {
                _this._router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        };
        this.edit_profile = function () {
            _this._router.navigate(['/edit-profile', _this.UserId]);
        };
        this.change_password = function () {
            _this._router.navigate(['/change-password', _this.UserId]);
        };
        this.logout = function () {
            var logged_in_userId = _this.cookie.get('UserId');
            var userId_data = {
                userId: logged_in_userId
            };
            _this._eventser.Logout(userId_data).subscribe(function (apiResponse) {
                //alert(apiResponse);
                if (apiResponse['status'] == 200) {
                    _this.cookie.delete('M_P_AuthToken');
                    _this.cookie.delete('UserId');
                    _this.cookie.delete('UserName');
                    _this.cookie.delete('M_P_UserType');
                    _this._userservice.setUserInfoLocalStorage("");
                    _this._router.navigate(['/login']);
                    _this.toastr.success(apiResponse['message']);
                }
                else {
                    _this.toastr.warning(apiResponse['message']);
                }
            });
        };
        this.edit_profile_data = function () {
            _this.updated_number = _this.single_user_data['mobileNumber'];
            _this.updated_code_length = _this.single_user_data['cntry_code_length'];
            _this.single_user_data['mobileNumber'] = _this.single_user_data['mobileNumber'].substr(_this.single_user_data['cntry_code_length']);
            _this._userservice.edit_profile_htp(_this.single_user_data.userId, _this.single_user_data).subscribe(function (apiresponse) {
                if (apiresponse['status'] == 200) {
                    _this.toastr.warning(apiresponse['message']);
                    _this.single_user_data.mobileNumber = _this.updated_number;
                    _this.single_user_data.cntry_code_length = _this.updated_code_length;
                }
                else {
                    _this.toastr.warning(apiresponse['message']);
                }
            });
        };
        this.all_users = function () {
            _this._router.navigate(['/Aevent']);
        };
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.M_P_AuthToken = this.cookie.get('M_P_AuthToken');
        this.UserId = this.cookie.get('UserId');
        this.UserName = this.cookie.get('UserName');
        this.M_P_UserType = this.cookie.get('M_P_UserType');
        this.userInfo = this._userservice.getLocalStorageUserinfo();
        this.checkstatus();
        var fetched_userId = this.actiroute.snapshot.paramMap.get("userId");
        this.single_user_data = this._userservice.get_single_user_data(fetched_userId).subscribe(function (apiResponse) {
            if (apiResponse['status'] == 200) {
                _this.single_user_data = apiResponse['data'];
                _this.single_user_data.mobileNumber = "" + _this.single_user_data['country_code'] + _this.single_user_data['mobileNumber'];
                _this.single_user_data.cntry_code_length = _this.single_user_data['country_code'].length;
            }
            else {
                //alert("else");
                _this.toastr.warning(apiResponse['message']);
            }
        });
        this.all_the_countries_name = { "BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique" };
        this.country_keys = Object.keys(this.all_the_countries_name);
        this.vals = Object.values(this.all_the_countries_name);
        this.entries = Object.entries(this.all_the_countries_name);
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_7__('#mobileNumber').on('keypress, keydown', function (event) {
                //alert(readOnlyLength);
                var $field = jquery__WEBPACK_IMPORTED_MODULE_7__(this);
                var readOnly_chars = document.getElementById('cc_code').value;
                var readOnlyLength = readOnly_chars.length;
                jquery__WEBPACK_IMPORTED_MODULE_7__('#mobileNumber').text(event.which + '-' + this.selectionStart);
                if ((event.which != 37 && (event.which != 39)) &&
                    ((this.selectionStart < readOnlyLength) ||
                        ((this.selectionStart == readOnlyLength) && (event.which == 8)))) {
                    return false;
                }
            });
        });
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_event_service_service__WEBPACK_IMPORTED_MODULE_3__["EventServiceService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/user/edit-profile/edit-profile.component.css")]
        })
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_header {\r\n    background-color : lightgrey;\r\n    padding : 2%;\r\n    font-size : 2rem;\r\n}\r\n\r\n.form_middle {\r\n    width : 35%;\r\n    margin-top : 5%;\r\n    border-style: solid;\r\n    border-width: medium;\r\n    padding : 2%;\r\n    border-radius : 25px;\r\n    position: fixed;\r\n    left: 32%;\r\n    border-color : lightgrey;\r\n    top : 20%;\r\n}\r\n\r\n.form_header{\r\n    text-align :center;\r\n    margin:2%;\r\n}\r\n\r\n.form-group .form-control {\r\n    width : 100%;\r\n    left : 25% !important;\r\n    \r\n}\r\n\r\n.loader {\r\n    position:fixed;\r\n    width:100%;\r\n    left:0;right:0;top:0;bottom:0;\r\n    background-color: rgba(255,255,255,0.7);\r\n    z-index:9999;\r\n    display:none;\r\n\r\n  }\r\n\r\n#loader::after {\r\n    content:'';\r\n    display:block;\r\n    position:absolute;\r\n    left:48%;top:40%;\r\n    width:40px;height:40px;\r\n    border-style:solid;\r\n    border-color:black;\r\n    border-top-color:transparent;\r\n    border-width: 4px;\r\n    border-radius:50%;\r\n    -webkit-animation: spin .8s linear infinite;\r\n    animation: spin .8s linear infinite;\r\n}\r\n\r\n.form-group label {\r\n    color : lightgrey;\r\n}\r\n\r\n.btn_width{\r\n    \r\n    border-color:lightgrey;\r\n    width:100%;\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n\r\n.form-control {\r\n    color: black;\r\n}\r\n\r\n.create-account{\r\n    text-align: center;\r\n    padding-top : 5%;\r\n}\r\n\r\n.forgot-password-link{\r\n    \r\n    padding-top : 2%;\r\n    font-size: 0.9rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUTtJQUM3Qix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLFlBQVk7O0VBRWQ7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixRQUFRLENBQUMsT0FBTztJQUNoQixVQUFVLENBQUMsV0FBVztJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7O0lBRUksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcF9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IGxpZ2h0Z3JleTtcclxuICAgIHBhZGRpbmcgOiAyJTtcclxuICAgIGZvbnQtc2l6ZSA6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtX21pZGRsZSB7XHJcbiAgICB3aWR0aCA6IDM1JTtcclxuICAgIG1hcmdpbi10b3AgOiA1JTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIHBhZGRpbmcgOiAyJTtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgYm9yZGVyLWNvbG9yIDogbGlnaHRncmV5O1xyXG4gICAgdG9wIDogMjAlO1xyXG59XHJcbi5mb3JtX2hlYWRlcntcclxuICAgIHRleHQtYWxpZ24gOmNlbnRlcjtcclxuICAgIG1hcmdpbjoyJTtcclxufVxyXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICAgIGxlZnQgOiAyNSUgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGxlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG4gICAgei1pbmRleDo5OTk5O1xyXG4gICAgZGlzcGxheTpub25lO1xyXG5cclxuICB9XHJcblxyXG4gICNsb2FkZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjQ4JTt0b3A6NDAlO1xyXG4gICAgd2lkdGg6NDBweDtoZWlnaHQ6NDBweDtcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci10b3AtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBjb2xvciA6IGxpZ2h0Z3JleTtcclxufVxyXG4uYnRuX3dpZHRoe1xyXG4gICAgXHJcbiAgICBib3JkZXItY29sb3I6bGlnaHRncmV5O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVx0XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY3JlYXRlLWFjY291bnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcCA6IDUlO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkLWxpbmt7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wIDogMiU7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(cookieService, _router, _userservice, toastr) {
        var _this = this;
        this.cookieService = cookieService;
        this._router = _router;
        this._userservice = _userservice;
        this.toastr = toastr;
        this.login = function () {
            _this._router.navigate(['/login']);
        };
        this.signUp = function () {
            _this._router.navigate(['signUp']);
        };
        this.forgot_pwd = function () {
            if (_this.email === undefined || _this.email === null || _this.email === '') {
                _this.toastr.warning("Please enter emaill address");
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('#loader').show(0);
                var params = {
                    email: _this.email
                };
                _this._userservice.ForgotPwd(params).subscribe(function (apiResponse) {
                    if (apiResponse['status'] == 200) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#loader').hide(0);
                        _this.toastr.success(apiResponse['message']);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#loader').hide(0);
                        _this.toastr.error(apiResponse['message']);
                    }
                });
            }
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_header {\r\n    background-color : lightgrey;\r\n    padding : 2%;\r\n    font-size : 2rem;\r\n}\r\n\r\n.form_middle {\r\n    width : 35%;\r\n    margin-top : 5%;\r\n    border-style: solid;\r\n    border-width: medium;\r\n    padding : 2%;\r\n    border-radius : 25px;\r\n    position: fixed;\r\n    left: 32%;\r\n    border-color : lightgrey;\r\n    top : 20%;\r\n}\r\n\r\n.form_header{\r\n    text-align :center;\r\n    margin:2%;\r\n}\r\n\r\n.form-group .form-control {\r\n    width : 100%;\r\n    left : 25% !important;\r\n    \r\n}\r\n\r\n.form-group label {\r\n    color : lightgrey;\r\n}\r\n\r\n.btn_width{\r\n    \r\n    border-color:lightgrey;\r\n    width:100%;\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n\r\n.form-control {\r\n    color: black;\r\n}\r\n\r\n.create-account{\r\n    text-align: center;\r\n    padding-top : 5%;\r\n}\r\n\r\n.forgot-password-link{\r\n    \r\n    padding-top : 2%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n/* The message box is shown when the user clicks on the password field */\r\n\r\n/* #message {\r\n     display:none;  \r\n    background: #f1f1f1;\r\n    color: #000;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  #message p {\r\n    padding: 10px 35px;\r\n    font-size: 18px;\r\n  } */\r\n\r\n/* Add a green text color and a checkmark when the requirements are right */\r\n\r\n.valid {\r\n    color: green;\r\n  }\r\n\r\n.valid:before {\r\n    position: relative;\r\n    content: \"✔\";\r\n  }\r\n\r\n/* Add a red text color and an \"x\" when the requirements are wrong */\r\n\r\n.invalid {\r\n    color: red;\r\n  }\r\n\r\n.invalid:before {\r\n    position: relative;\r\n    \r\n    content: \"✖\";\r\n  }\r\n\r\n.message {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n  }\r\n\r\n.message .tooltiptext {\r\n    visibility: hidden;\r\n    width: 400px;\r\n    background-color : rgba(58, 56, 56, 0.5);\r\n    color: #fff;\r\n    text-align: left;\r\n    border-radius: 6px;\r\n    padding : 15px;\r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n    \r\n    top: -100%;\r\n    left: 50%; \r\n    margin-left: -60px;\r\n\r\n  }\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n  }\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n  \r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjs7QUFFekI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7O0lBRUksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFHQSx3RUFBd0U7O0FBQ3hFOzs7Ozs7Ozs7Ozs7S0FZSzs7QUFFSCwyRUFBMkU7O0FBQzNFO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0Usa0JBQWtCOztJQUVsQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLCtCQUErQjtFQUNqQzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7O0lBRVYsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7O0VBRXBCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwrQkFBK0I7RUFDakM7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjOztJQUVkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcF9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IGxpZ2h0Z3JleTtcclxuICAgIHBhZGRpbmcgOiAyJTtcclxuICAgIGZvbnQtc2l6ZSA6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtX21pZGRsZSB7XHJcbiAgICB3aWR0aCA6IDM1JTtcclxuICAgIG1hcmdpbi10b3AgOiA1JTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIHBhZGRpbmcgOiAyJTtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgYm9yZGVyLWNvbG9yIDogbGlnaHRncmV5O1xyXG4gICAgdG9wIDogMjAlO1xyXG59XHJcbi5mb3JtX2hlYWRlcntcclxuICAgIHRleHQtYWxpZ24gOmNlbnRlcjtcclxuICAgIG1hcmdpbjoyJTtcclxufVxyXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICAgIGxlZnQgOiAyNSUgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIGNvbG9yIDogbGlnaHRncmV5O1xyXG59XHJcbi5idG5fd2lkdGh7XHJcbiAgICBcclxuICAgIGJvcmRlci1jb2xvcjpsaWdodGdyZXk7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHRcclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jcmVhdGUtYWNjb3VudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wIDogNSU7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtbGlua3tcclxuICAgIFxyXG4gICAgcGFkZGluZy10b3AgOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG5cclxuLyogVGhlIG1lc3NhZ2UgYm94IGlzIHNob3duIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwYXNzd29yZCBmaWVsZCAqL1xyXG4vKiAjbWVzc2FnZSB7XHJcbiAgICAgZGlzcGxheTpub25lOyAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgI21lc3NhZ2UgcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC8qIEFkZCBhIGdyZWVuIHRleHQgY29sb3IgYW5kIGEgY2hlY2ttYXJrIHdoZW4gdGhlIHJlcXVpcmVtZW50cyBhcmUgcmlnaHQgKi9cclxuICAudmFsaWQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAudmFsaWQ6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbnRlbnQ6IFwi4pyUXCI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIHJlZCB0ZXh0IGNvbG9yIGFuZCBhbiBcInhcIiB3aGVuIHRoZSByZXF1aXJlbWVudHMgYXJlIHdyb25nICovXHJcbiAgLmludmFsaWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmludmFsaWQ6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgY29udGVudDogXCLinJZcIjtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSg1OCwgNTYsIDU2LCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZyA6IDE1cHg7XHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIFxyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIGxlZnQ6IDUwJTsgXHJcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICBcclxuICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







//import { $ } from 'protractor';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookieService, _router, _userservice, toastr) {
        var _this = this;
        this.cookieService = cookieService;
        this._router = _router;
        this._userservice = _userservice;
        this.toastr = toastr;
        this.PassRequirements = function (myInput) {
            var letter = document.getElementById("letter");
            var capital = document.getElementById("capital");
            var number = document.getElementById("number");
            var length = document.getElementById("length");
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            }
            else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }
            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if (myInput.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            }
            else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }
            // Validate numbers
            var numbers = /[0-9]/g;
            if (myInput.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            }
            else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }
            // Validate length
            if (myInput.length >= 7 && myInput.length <= 14) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            }
            else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
        };
        this.checkstatus = function () {
            if (_this.M_P_AuthToken === undefined || _this.M_P_AuthToken === null || _this.M_P_AuthToken === '') {
                _this._router.navigate(['/login']);
                return false;
            }
            else {
                if (_this.M_P_UserType == 'admin') {
                    _this._router.navigate(['/Aevent']);
                }
                else {
                    _this._router.navigate(['/per-user', _this.UserId]);
                }
                return true;
            }
        };
        this.signUp = function () {
            _this._router.navigate(['/signUp']);
        };
        this.login_data = function () {
            if (_this.email === undefined || _this.email === null || _this.email === '') {
                _this.toastr.warning('Please enter email addresss');
            }
            else if (_this.password === undefined || _this.password === null || _this.password === '') {
                _this.toastr.warning('Please enter password');
            }
            else {
                var LoginParams = {
                    email: _this.email,
                    password: _this.password
                };
                _this._userservice.LoginFun(LoginParams).subscribe(function (apiResponse) {
                    if (apiResponse['status'] == 200) {
                        console.log(apiResponse['data']);
                        _this.toastr.warning(apiResponse['message']);
                        _this.cookieService.set('M_P_AuthToken', apiResponse['data']['authToken']);
                        _this.cookieService.set('UserId', apiResponse['data']['userDetails']['userId']);
                        _this.cookieService.set('UserName', apiResponse['data']['userDetails']['firstName'] + " " + apiResponse['data']['userDetails']['lastName']);
                        var fullNAme = apiResponse['data']['userDetails']['firstName'] + " " + apiResponse['data']['userDetails']['lastName'];
                        var lastfive_chars = fullNAme.substr(fullNAme.length - 5);
                        _this._userservice.setUserInfoLocalStorage(apiResponse['data']['userDetails']);
                        console.log(lastfive_chars.toLowerCase());
                        console.log(apiResponse['data']['userDetails']['is_admin']);
                        if (lastfive_chars.toLowerCase() == 'admin' && apiResponse['data']['userDetails']['is_admin'] == true) {
                            _this.cookieService.set('M_P_UserType', 'admin');
                            _this._router.navigate(['/Aevent']);
                        }
                        else {
                            _this.cookieService.set('M_P_UserType', 'normal');
                            _this._router.navigate(['/Uevent']);
                            _this._router.navigate(['/per-user', apiResponse['data']['userDetails']['userId']]);
                        }
                        //this._router.navigate(['/Uevent']);
                    }
                    else {
                        _this.toastr.error(apiResponse['message']);
                    }
                });
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.M_P_AuthToken = this.cookieService.get('M_P_AuthToken');
        this.UserId = this.cookieService.get('UserId');
        this.UserName = this.cookieService.get('UserName');
        this.M_P_UserType = this.cookieService.get('M_P_UserType');
        this.userInfo = this._userservice.getLocalStorageUserinfo();
        this.checkstatus();
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6__("#exampleInputPassword1").focus(function () {
                document.getElementById("tooltiptext").style.visibility = "visible";
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__("#exampleInputPassword1").blur(function () {
                document.getElementById("tooltiptext").style.visibility = "hidden";
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/recover-password/recover-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/recover-password/recover-password.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_header {\r\n    background-color : lightgrey;\r\n    padding : 2%;\r\n    font-size : 2rem;\r\n}\r\n\r\n.form_middle {\r\n    width : 35%;\r\n    margin-top : 5%;\r\n    border-style: solid;\r\n    border-width: medium;\r\n    padding : 2%;\r\n    border-radius : 25px;\r\n    position: fixed;\r\n    left: 32%;\r\n    border-color : lightgrey;\r\n    top : 20%;\r\n}\r\n\r\n.form_header{\r\n    text-align :center;\r\n    margin:2%;\r\n}\r\n\r\n.form-group .form-control {\r\n    width : 100%;\r\n    left : 25% !important;\r\n    \r\n}\r\n\r\n.form-group label {\r\n    color : lightgrey;\r\n}\r\n\r\n.btn_width{\r\n    \r\n    border-color:lightgrey;\r\n    width:100%;\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n\r\n.form-control {\r\n    color: black;\r\n}\r\n\r\n.create-account{\r\n    text-align: center;\r\n    padding-top : 5%;\r\n}\r\n\r\n.forgot-password-link{\r\n    \r\n    padding-top : 2%;\r\n    font-size: 0.9rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWNvdmVyLXBhc3N3b3JkL3JlY292ZXItcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7O0FBRXpCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcF9oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IGxpZ2h0Z3JleTtcclxuICAgIHBhZGRpbmcgOiAyJTtcclxuICAgIGZvbnQtc2l6ZSA6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtX21pZGRsZSB7XHJcbiAgICB3aWR0aCA6IDM1JTtcclxuICAgIG1hcmdpbi10b3AgOiA1JTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIHBhZGRpbmcgOiAyJTtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgYm9yZGVyLWNvbG9yIDogbGlnaHRncmV5O1xyXG4gICAgdG9wIDogMjAlO1xyXG59XHJcbi5mb3JtX2hlYWRlcntcclxuICAgIHRleHQtYWxpZ24gOmNlbnRlcjtcclxuICAgIG1hcmdpbjoyJTtcclxufVxyXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICAgIGxlZnQgOiAyNSUgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIGNvbG9yIDogbGlnaHRncmV5O1xyXG59XHJcbi5idG5fd2lkdGh7XHJcbiAgICBcclxuICAgIGJvcmRlci1jb2xvcjpsaWdodGdyZXk7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHRcclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jcmVhdGUtYWNjb3VudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wIDogNSU7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtbGlua3tcclxuICAgIFxyXG4gICAgcGFkZGluZy10b3AgOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/recover-password/recover-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/recover-password/recover-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecoverPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordComponent", function() { return RecoverPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var RecoverPasswordComponent = /** @class */ (function () {
    function RecoverPasswordComponent(actiroute, cookieService, _router, _userservice, toastr) {
        var _this = this;
        this.actiroute = actiroute;
        this.cookieService = cookieService;
        this._router = _router;
        this._userservice = _userservice;
        this.toastr = toastr;
        this.change_pwd = function () {
            if (_this.password === undefined || _this.password === null || _this.password === '') {
                _this.toastr.warning("Please enter password");
            }
            if (_this.match_password === undefined || _this.match_password === null || _this.match_password === '') {
                _this.toastr.warning("Please retype new password in the field");
            }
            if (_this.match_password !== _this.password) {
                _this.toastr.warning("Password and Retype password does not match");
            }
            else {
                var params = {
                    email: _this.email_from_token,
                    password: _this.password
                };
                //alert(params);
                _this._userservice.recover_pwd(params).subscribe(function (apirespoonse) {
                    if (apirespoonse['status'] == 200) {
                        _this.toastr.success(apirespoonse['message']);
                        _this._router.navigate(['/login']);
                    }
                    else {
                        _this.toastr.error(apirespoonse['message']);
                    }
                });
            }
        };
    }
    RecoverPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.actiroute.snapshot.paramMap.get("Token");
        var Token_res = {
            Token: token
        };
        this.email_from_token = this._userservice.getemail_from_token(Token_res).subscribe(function (apiResponse) {
            if (apiResponse['status'] == 200) {
                _this.email_from_token = apiResponse['data']['email'];
                //alert(this.email_from_token);
            }
            else {
                _this.toastr.warning(apiResponse['message']);
                _this._router.navigate(['/forgot-password']);
            }
        });
    };
    RecoverPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    RecoverPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recover-password',
            template: __webpack_require__(/*! raw-loader!./recover-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/recover-password/recover-password.component.html"),
            styles: [__webpack_require__(/*! ./recover-password.component.css */ "./src/app/user/recover-password/recover-password.component.css")]
        })
    ], RecoverPasswordComponent);
    return RecoverPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    overflow:  hidden;\r\n    height:  auto;\r\n}\r\n\r\n\r\n\r\n.top_header {\r\n    background-color : lightgrey;\r\n    padding : 2%;\r\n    font-size : 2rem;\r\n}\r\n\r\n\r\n\r\n.country_code_dropdown{\r\n    width:10% !important;\r\n}\r\n\r\n\r\n\r\n.form_middle {\r\n    width : 35%;\r\n    margin-top : 5%;\r\n    border-style: solid;\r\n    border-width: medium;\r\n    padding : 2%;\r\n    border-radius : 25px;\r\n    left: 32%;\r\n    border-color : lightgrey;\r\n    top : 20%;\r\n    position: absolute;\r\n}\r\n\r\n\r\n\r\n.form_header{\r\n    text-align :center;\r\n    margin:2%;\r\n}\r\n\r\n\r\n\r\n.form-group .form-control {\r\n    width : 100%;\r\n    left : 25% !important;\r\n    \r\n}\r\n\r\n\r\n\r\n.phone-input{\r\n\tmargin-bottom:8px;\r\n}\r\n\r\n\r\n\r\n.loader {\r\n    position:fixed;\r\n    width:100%;\r\n    left:0;right:0;top:0;bottom:0;\r\n    background-color: rgba(255,255,255,0.7);\r\n    z-index:9999;\r\n    display:none;\r\n\r\n  }\r\n\r\n\r\n\r\n#loader::after {\r\n    content:'';\r\n    display:block;\r\n    position:absolute;\r\n    left:48%;top:40%;\r\n    width:40px;height:40px;\r\n    border-style:solid;\r\n    border-color:black;\r\n    border-top-color:transparent;\r\n    border-width: 4px;\r\n    border-radius:50%;\r\n    -webkit-animation: spin .8s linear infinite;\r\n    animation: spin .8s linear infinite;\r\n}\r\n\r\n\r\n\r\n/* Safari */\r\n\r\n\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n\r\n\r\n\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n\r\n\r\n\r\n.form-group label {\r\n    color : lightgrey;\r\n}\r\n\r\n\r\n\r\n.phone-list label {\r\n    color : lightgrey;\r\n}\r\n\r\n\r\n\r\n.btn_width{\r\n    \r\n    border-color:lightgrey;\r\n    width:100%;\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n\r\n\r\n\r\n.form-control {\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.create-account{\r\n    text-align: center;\r\n    padding-top : 5%;\r\n}\r\n\r\n\r\n\r\n.forgot-password-link{\r\n    \r\n    padding-top : 2%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n\r\n/* The message box is shown when the user clicks on the password field */\r\n\r\n\r\n\r\n/* #message {\r\n     display:none;  \r\n    background: #f1f1f1;\r\n    color: #000;\r\n    position: relative;\r\n    padding: 20px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  #message p {\r\n    padding: 10px 35px;\r\n    font-size: 18px;\r\n  } */\r\n\r\n\r\n\r\n/* Add a green text color and a checkmark when the requirements are right */\r\n\r\n\r\n\r\n.valid {\r\n    color: green;\r\n  }\r\n\r\n\r\n\r\n.valid:before {\r\n    position: relative;\r\n    content: \"✔\";\r\n  }\r\n\r\n\r\n\r\n/* Add a red text color and an \"x\" when the requirements are wrong */\r\n\r\n\r\n\r\n.invalid {\r\n    color: red;\r\n  }\r\n\r\n\r\n\r\n.invalid:before {\r\n    position: relative;\r\n    \r\n    content: \"✖\";\r\n  }\r\n\r\n\r\n\r\n.message {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n  }\r\n\r\n\r\n\r\n.message .tooltiptext {\r\n    visibility: hidden;\r\n    width: 400px;\r\n    background-color : rgba(58, 56, 56, 0.5);\r\n    color: #fff;\r\n    text-align: left;\r\n    border-radius: 6px;\r\n    padding : 15px;\r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n    \r\n    top: -100%;\r\n    left: 50%; \r\n    margin-left: -60px;\r\n\r\n  }\r\n\r\n\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n  }\r\n\r\n\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n  \r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n\r\n\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7OztBQUlBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7Ozs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsU0FBUztJQUNULHdCQUF3QjtJQUN4QixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOzs7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOzs7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCOztBQUV6Qjs7OztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOzs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVE7SUFDN0IsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixZQUFZOztFQUVkOzs7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixRQUFRLENBQUMsT0FBTztJQUNoQixVQUFVLENBQUMsV0FBVztJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxtQ0FBbUM7QUFDdkM7Ozs7QUFHRSxXQUFXOzs7O0FBQ1g7SUFDRSxLQUFLLCtCQUErQixFQUFFO0lBQ3RDLE9BQU8saUNBQWlDLEVBQUU7RUFDNUM7Ozs7QUFFQTtJQUNFLEtBQUssdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtFQUNwQzs7OztBQUdGO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7Ozs7QUFDQTs7SUFFSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7Ozs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7Ozs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7O0FBRUEsd0VBQXdFOzs7O0FBQ3hFOzs7Ozs7Ozs7Ozs7S0FZSzs7OztBQUVILDJFQUEyRTs7OztBQUMzRTtJQUNFLFlBQVk7RUFDZDs7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7OztBQUVBLG9FQUFvRTs7OztBQUNwRTtJQUNFLFVBQVU7RUFDWjs7OztBQUVBO0lBQ0Usa0JBQWtCOztJQUVsQixZQUFZO0VBQ2Q7Ozs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0VBQ2pDOzs7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCOztFQUVwQjs7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwrQkFBK0I7RUFDakM7Ozs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7O0lBRWQseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7Ozs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG92ZXJmbG93OiAgaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAgYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4udG9wX2hlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogbGlnaHRncmV5O1xyXG4gICAgcGFkZGluZyA6IDIlO1xyXG4gICAgZm9udC1zaXplIDogMnJlbTtcclxufVxyXG4uY291bnRyeV9jb2RlX2Ryb3Bkb3due1xyXG4gICAgd2lkdGg6MTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtX21pZGRsZSB7XHJcbiAgICB3aWR0aCA6IDM1JTtcclxuICAgIG1hcmdpbi10b3AgOiA1JTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTtcclxuICAgIHBhZGRpbmcgOiAyJTtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAyNXB4O1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgYm9yZGVyLWNvbG9yIDogbGlnaHRncmV5O1xyXG4gICAgdG9wIDogMjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5mb3JtX2hlYWRlcntcclxuICAgIHRleHQtYWxpZ24gOmNlbnRlcjtcclxuICAgIG1hcmdpbjoyJTtcclxufVxyXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICAgIGxlZnQgOiAyNSUgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbi5waG9uZS1pbnB1dHtcclxuXHRtYXJnaW4tYm90dG9tOjhweDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcclxuICAgIHotaW5kZXg6OTk5OTtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuXHJcbiAgfVxyXG5cclxuICAjbG9hZGVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDo0OCU7dG9wOjQwJTtcclxuICAgIHdpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuICBcclxuICAvKiBTYWZhcmkgKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG5cclxuICBcclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgY29sb3IgOiBsaWdodGdyZXk7XHJcbn1cclxuLnBob25lLWxpc3QgbGFiZWwge1xyXG4gICAgY29sb3IgOiBsaWdodGdyZXk7XHJcbn1cclxuLmJ0bl93aWR0aHtcclxuICAgIFxyXG4gICAgYm9yZGVyLWNvbG9yOmxpZ2h0Z3JleTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cdFxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNyZWF0ZS1hY2NvdW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3AgOiA1JTtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZC1saW5re1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLXRvcCA6IDIlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8qIFRoZSBtZXNzYWdlIGJveCBpcyBzaG93biB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcGFzc3dvcmQgZmllbGQgKi9cclxuLyogI21lc3NhZ2Uge1xyXG4gICAgIGRpc3BsYXk6bm9uZTsgIFxyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNtZXNzYWdlIHAge1xyXG4gICAgcGFkZGluZzogMTBweCAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH0gKi9cclxuICBcclxuICAvKiBBZGQgYSBncmVlbiB0ZXh0IGNvbG9yIGFuZCBhIGNoZWNrbWFyayB3aGVuIHRoZSByZXF1aXJlbWVudHMgYXJlIHJpZ2h0ICovXHJcbiAgLnZhbGlkIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgXHJcbiAgLnZhbGlkOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb250ZW50OiBcIuKclFwiO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSByZWQgdGV4dCBjb2xvciBhbmQgYW4gXCJ4XCIgd2hlbiB0aGUgcmVxdWlyZW1lbnRzIGFyZSB3cm9uZyAqL1xyXG4gIC5pbnZhbGlkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZhbGlkOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIGNvbnRlbnQ6IFwi4pyWXCI7XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAubWVzc2FnZSAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoNTgsIDU2LCA1NiwgMC41KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmcgOiAxNXB4O1xyXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBcclxuICAgIHRvcDogLTEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgXHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);






//import { $ } from 'protractor';

var SignupComponent = /** @class */ (function () {
    function SignupComponent(cookieService, _router, _userservice, toastr) {
        var _this = this;
        this.cookieService = cookieService;
        this._router = _router;
        this._userservice = _userservice;
        this.toastr = toastr;
        this.PassRequirements = function (myInput) {
            var letter = document.getElementById("letter");
            var capital = document.getElementById("capital");
            var number = document.getElementById("number");
            var length = document.getElementById("length");
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            }
            else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }
            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if (myInput.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            }
            else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }
            // Validate numbers
            var numbers = /[0-9]/g;
            if (myInput.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            }
            else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }
            // Validate length
            if (myInput.length >= 7 && myInput.length <= 14) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            }
            else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
        };
        this.getcountryname = function (cntr_name) {
            var all_abbr_code = { "BD": "880", "BE": "32", "BF": "226", "BG": "359", "BA": "387", "BB": "+1-246", "WF": "681", "BL": "590", "BM": "+1-441", "BN": "673", "BO": "591", "BH": "973", "BI": "257", "BJ": "229", "BT": "975", "JM": "+1-876", "BV": "", "BW": "267", "WS": "685", "BQ": "599", "BR": "55", "BS": "+1-242", "JE": "+44-1534", "BY": "375", "BZ": "501", "RU": "7", "RW": "250", "RS": "381", "TL": "670", "RE": "262", "TM": "993", "TJ": "992", "RO": "40", "TK": "690", "GW": "245", "GU": "+1-671", "GT": "502", "GS": "", "GR": "30", "GQ": "240", "GP": "590", "JP": "81", "GY": "592", "GG": "+44-1481", "GF": "594", "GE": "995", "GD": "+1-473", "GB": "44", "GA": "241", "SV": "503", "GN": "224", "GM": "220", "GL": "299", "GI": "350", "GH": "233", "OM": "968", "TN": "216", "JO": "962", "HR": "385", "HT": "509", "HU": "36", "HK": "852", "HN": "504", "HM": " ", "VE": "58", "PR": "+1-787 and 1-939", "PS": "970", "PW": "680", "PT": "351", "SJ": "47", "PY": "595", "IQ": "964", "PA": "507", "PF": "689", "PG": "675", "PE": "51", "PK": "92", "PH": "63", "PN": "870", "PL": "48", "PM": "508", "ZM": "260", "EH": "212", "EE": "372", "EG": "20", "ZA": "27", "EC": "593", "IT": "39", "VN": "84", "SB": "677", "ET": "251", "SO": "252", "ZW": "263", "SA": "966", "ES": "34", "ER": "291", "ME": "382", "MD": "373", "MG": "261", "MF": "590", "MA": "212", "MC": "377", "UZ": "998", "MM": "95", "ML": "223", "MO": "853", "MN": "976", "MH": "692", "MK": "389", "MU": "230", "MT": "356", "MW": "265", "MV": "960", "MQ": "596", "MP": "+1-670", "MS": "+1-664", "MR": "222", "IM": "+44-1624", "UG": "256", "TZ": "255", "MY": "60", "MX": "52", "IL": "972", "FR": "33", "IO": "246", "SH": "290", "FI": "358", "FJ": "679", "FK": "500", "FM": "691", "FO": "298", "NI": "505", "NL": "31", "NO": "47", "NA": "264", "VU": "678", "NC": "687", "NE": "227", "NF": "672", "NG": "234", "NZ": "64", "NP": "977", "NR": "674", "NU": "683", "CK": "682", "XK": "", "CI": "225", "CH": "41", "CO": "57", "CN": "86", "CM": "237", "CL": "56", "CC": "61", "CA": "1", "CG": "242", "CF": "236", "CD": "243", "CZ": "420", "CY": "357", "CX": "61", "CR": "506", "CW": "599", "CV": "238", "CU": "53", "SZ": "268", "SY": "963", "SX": "599", "KG": "996", "KE": "254", "SS": "211", "SR": "597", "KI": "686", "KH": "855", "KN": "+1-869", "KM": "269", "ST": "239", "SK": "421", "KR": "82", "SI": "386", "KP": "850", "KW": "965", "SN": "221", "SM": "378", "SL": "232", "SC": "248", "KZ": "7", "KY": "+1-345", "SG": "65", "SE": "46", "SD": "249", "DO": "+1-809 and 1-829", "DM": "+1-767", "DJ": "253", "DK": "45", "VG": "+1-284", "DE": "49", "YE": "967", "DZ": "213", "US": "1", "UY": "598", "YT": "262", "UM": "1", "LB": "961", "LC": "+1-758", "LA": "856", "TV": "688", "TW": "886", "TT": "+1-868", "TR": "90", "LK": "94", "LI": "423", "LV": "371", "TO": "676", "LT": "370", "LU": "352", "LR": "231", "LS": "266", "TH": "66", "TF": "", "TG": "228", "TD": "235", "TC": "+1-649", "LY": "218", "VA": "379", "VC": "+1-784", "AE": "971", "AD": "376", "AG": "+1-268", "AF": "93", "AI": "+1-264", "VI": "+1-340", "IS": "354", "IR": "98", "AM": "374", "AL": "355", "AO": "244", "AQ": "", "AS": "+1-684", "AR": "54", "AU": "61", "AT": "43", "AW": "297", "IN": "91", "AX": "+358-18", "AZ": "994", "IE": "353", "ID": "62", "UA": "380", "QA": "974", "MZ": "258" };
            var abbr_code_keys = Object.keys(all_abbr_code);
            var abbr_Code_vals = Object.values(all_abbr_code);
            var abbr_code_entries = Object.entries(all_abbr_code);
            for (var x in abbr_code_entries) {
                if (abbr_code_entries[x][0] == cntr_name) {
                    _this.cntry_code = abbr_code_entries[x][1];
                    return _this.cntry_code;
                }
            }
        };
        this.login = function () {
            _this._router.navigate(['/login']);
        };
        this.signup_data = function () {
            _this.country_code = document.getElementById('cc_code').value;
            _this.name_of_country = document.getElementById('cc_name').value;
            if (_this.firstName === undefined || _this.firstName === null || _this.firstName === '') {
                _this.toastr.warning("please enter firstname");
            }
            else if (_this.lastName === undefined || _this.lastName === null || _this.lastName === '') {
                _this.toastr.warning("please enter lastname");
            }
            else if (_this.mobileNumber === undefined || _this.mobileNumber === null) {
                _this.toastr.warning("please enter mobile number");
            }
            else if (_this.email === undefined || _this.email === null || _this.email === '') {
                _this.toastr.warning("please enter email address");
            }
            else if (_this.password === undefined || _this.password === null || _this.password === '') {
                _this.toastr.warning("please enter password");
            }
            else {
                //alert(this.country_code.length);
                _this.updated_number = _this.mobileNumber;
                _this.mobileNumber = _this.mobileNumber.substr(_this.country_code.length);
                var signup_data = {
                    firstname: _this.firstName,
                    lastName: _this.lastName,
                    mobileNumber: _this.mobileNumber,
                    email: _this.email,
                    password: _this.password,
                    country_code: _this.country_code,
                    country_name: _this.name_of_country
                };
                jquery__WEBPACK_IMPORTED_MODULE_6__('#loader').show(0);
                _this._userservice.signUp(signup_data).subscribe(function (apiresponse) {
                    if (apiresponse['status'] == 200) {
                        _this.mobileNumber = _this.updated_number;
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#loader').hide(0);
                        _this.toastr.warning(apiresponse['message']);
                        _this._router.navigate(['/login']);
                    }
                    else {
                        _this.mobileNumber = _this.updated_number;
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#loader').hide(0);
                        _this.toastr.warning(apiresponse['message']);
                    }
                });
            }
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.all_the_countries_name = { "BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique" };
        this.country_keys = Object.keys(this.all_the_countries_name);
        this.vals = Object.values(this.all_the_countries_name);
        this.entries = Object.entries(this.all_the_countries_name);
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6__('#mobileNumber').on('keypress, keydown', function (event) {
                //alert(readOnlyLength);
                var $field = jquery__WEBPACK_IMPORTED_MODULE_6__(this);
                var readOnly_chars = document.getElementById('cc_code').value;
                var readOnlyLength = readOnly_chars.length;
                jquery__WEBPACK_IMPORTED_MODULE_6__('#mobileNumber').text(event.which + '-' + this.selectionStart);
                if ((event.which != 37 && (event.which != 39)) &&
                    ((this.selectionStart < readOnlyLength) ||
                        ((this.selectionStart == readOnlyLength) && (event.which == 8)))) {
                    return false;
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__("#exampleInputPassword1").focus(function () {
                document.getElementById("tooltiptext").style.visibility = "visible";
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__("#exampleInputPassword1").blur(function () {
                document.getElementById("tooltiptext").style.visibility = "hidden";
            });
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recover-password/recover-password.component */ "./src/app/user/recover-password/recover-password.component.ts");
/* harmony import */ var _verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verify-user/verify-user.component */ "./src/app/user/verify-user/verify-user.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/user/edit-profile/edit-profile.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");












var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_8__["RecoverPasswordComponent"], _verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_9__["VerifyUserComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'signUp', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
                    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"] },
                    { path: 'recover-password/:Token', component: _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_8__["RecoverPasswordComponent"] },
                    { path: 'Verify-User/:Token', component: _verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_9__["VerifyUserComponent"] },
                    { path: 'edit-profile/:userId', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"] },
                    { path: 'change-password/:userId', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"] }
                ])
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/verify-user/verify-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/verify-user/verify-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdmVyaWZ5LXVzZXIvdmVyaWZ5LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/verify-user/verify-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/verify-user/verify-user.component.ts ***!
  \***********************************************************/
/*! exports provided: VerifyUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyUserComponent", function() { return VerifyUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var VerifyUserComponent = /** @class */ (function () {
    function VerifyUserComponent(actiroute, cookieService, _router, _userservice, toastr) {
        this.actiroute = actiroute;
        this.cookieService = cookieService;
        this._router = _router;
        this._userservice = _userservice;
        this.toastr = toastr;
    }
    VerifyUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.actiroute.snapshot.paramMap.get("Token");
        var Token_res = {
            Token: token
        };
        this._userservice.verify_useer_token(Token_res).subscribe(function (apiResponse) {
            if (apiResponse['status'] == 200) {
                _this.toastr.success(apiResponse['message']);
                _this._router.navigate(['/login']);
            }
            else {
                _this.toastr.warning(apiResponse['message']);
                //this._router.navigate(['/forgot-password']);
            }
        });
    };
    VerifyUserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    VerifyUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-user',
            template: __webpack_require__(/*! raw-loader!./verify-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/verify-user/verify-user.component.html"),
            styles: [__webpack_require__(/*! ./verify-user.component.css */ "./src/app/user/verify-user/verify-user.component.css")]
        })
    ], VerifyUserComponent);
    return VerifyUserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\project_1\event\meeting-planner\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map