import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Repo } from './repo.model';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = (environment as any).baseUrl || '';
  }

  create(repo: Repo): Observable<any> {
    const url = `${this.apiUrl}/orgs/ng-apimock/repos`;

    return this.http.post<any>(url, {
      name: repo.name
    }, {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'text/plain'
      })
    });
  }

  download(repo: Repo): Observable<any> {
    const url = `${this.apiUrl}/${repo.full_name}/${repo.default_branch}/README.md`;
    return this.http.get(url, {
      responseType: 'blob',
      observe: 'response',
    });
  }

  getRepos(): Observable<Repo[]> {
    const url = `${this.apiUrl}/orgs/ng-apimock/repos`;
    return this.http.get<Repo[]>(url);
  }
}
