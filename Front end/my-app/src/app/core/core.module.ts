import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AsideComponent } from "./aside/aside.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, AsideComponent, FooterComponent],
   
    imports: [CommonModule, FormsModule,RouterModule],
  exports: [HeaderComponent, AsideComponent, FooterComponent, FormsModule],
})
export class CoreModule {}
