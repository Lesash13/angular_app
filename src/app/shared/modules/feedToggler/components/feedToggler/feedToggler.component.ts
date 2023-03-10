import {Component, Input, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {Store, select} from '@ngrx/store'
import {isLoggedInSelector} from '../../../../../auth/store/selectors'

@Component({
  selector: 'feed-toggler',
  templateUrl: './feedToggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
