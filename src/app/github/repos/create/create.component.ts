import { Component, Input, OnInit } from '@angular/core';
import { ReposService } from '../repos.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Repo } from '../repo.model';
import { Router } from '@angular/router';
import { ErrorService } from '../../../error/error.service';

@Component({
    selector: 'apimock-create-repo',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateRepoComponent implements OnInit {
    @Input()
    repo: Repo;

    repoForm: FormGroup;
    done: boolean;

    constructor(private errorService: ErrorService,
                private fb: FormBuilder,
                private reposService: ReposService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.done = true;
        this.repoForm = this.fb.group({
            owner: new FormControl({ value: 'ng-apimock', disabled: true }),
            name: '',
            description: '',
        });
    }

    onSubmitForm(): void {
        this.repo = this.repoForm.value;
        this.done = false;
        this.reposService.create(this.repo)
            .subscribe(res => {
                    this.router.navigate(['/']);
                    this.done = true;
                },
                error => {
                    this.errorService.onError({ message: error.statusText } as any, () => {
                        this.done = true;
                    });
                });
    }
}
