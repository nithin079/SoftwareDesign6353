import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/_services';

@Component({
  selector: 'app-fuel-quote',
  templateUrl: './fuel-quote.component.html',
  styleUrls: ['./fuel-quote.component.less']
})
export class FuelQuoteComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  deleting = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gallonsRequested: ['', Validators.required],
      deliveryAddress: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      suggestedPrice: ['', [Validators.required]],
      totalAmountDue: ['', [Validators.required]],
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.form.controls; }

   onSubmit() {
    // this.submitted = true;

    // // reset alerts on submit
    // this.alertService.clear();

    // // stop here if form is invalid
    // if (this.form.invalid) {
    //     return;
    // }

    // this.loading = true;
    // this.accountService.update(this.account.id, this.form.value)
    //     .pipe(first())
    //     .subscribe({
    //         next: () => {
    //             this.alertService.success('Update successful', { keepAfterRouteChange: true });
    //             this.router.navigate(['../'], { relativeTo: this.route });
    //         },
    //         error: error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         }
    //     });
}
}
