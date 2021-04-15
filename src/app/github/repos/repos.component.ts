import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ReposService } from './repos.service';
import { Repo } from './repo.model';
import { ErrorService } from '../../error/error.service';

@Component({
  selector: 'apimock-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Repo>;
  displayedColumns = ['name', 'html_url', 'description', 'license', 'actions'];
  done: boolean;

  constructor(private errorService: ErrorService,
              private reposService: ReposService) {
    this.dataSource = new MatTableDataSource([] as Repo[]);
  }

  ngOnInit(): void {
    this.refresh();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  download(repo: Repo): void {
    this.done = false;
    this.reposService.download(repo)
      .subscribe(response => {
        const url = (window as any).URL.createObjectURL(response.body);
        const a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);

        a.href = url;
        a.download = 'README.md';
        a.click();
        this.done = true;
      }, err => {
        this.errorService.onError(err.error, () => {
          this.done = true;
        });
      });
  }

  refresh(): void {
    this.done = false;
    this.dataSource.data = [];
    this.reposService.getRepos()
      .subscribe(repos => {
        this.done = true;
        this.dataSource.data = repos;
      }, error => {
        this.errorService.onError({message: error.statusText} as any, () => {
          this.done = true;
        });
      });
  }
}
