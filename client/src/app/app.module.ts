import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { HttpErrorHandler } from "./http-error-handler.service";
import { MessageService } from "./message.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TasksComponent],
  imports: [BrowserModule, HttpModule, HttpClientModule, FormsModule],
  providers: [MessageService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule {}
