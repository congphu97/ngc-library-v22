import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Optional,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import {
  COMPONENT_GROUP_MAP,
  COMPONENT_ICON_MAP,
  COMPONENT_DESC_MAP
} from '../../guideline.constants';

export interface HeaderSearchResult {
  name: string;
  category: string;
  icon: string;
  desc: string;
}

@Component({
  selector: 'guideline-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class GuidelineHeaderComponent implements OnInit {
  @Input() isDarkMode: boolean = false;
  @Output() toggleTheme = new EventEmitter<boolean>();
  @Output() componentClick = new EventEmitter<void>();
  @Output() logoClick = new EventEmitter<void>();
  @Output() selectComponent = new EventEmitter<string>();

  @ViewChild('searchInput') public searchInputRef?: ElementRef<HTMLInputElement>;
  @ViewChild('searchContainer') public searchContainerRef?: ElementRef;

  public searchQuery: string = '';
  public isDropdownOpen: boolean = false;
  public selectedIndex: number = -1;

  public searchableComponents: HeaderSearchResult[] = [];
  public filteredResults: HeaderSearchResult[] = [];

  constructor(
    private _cdr: ChangeDetectorRef,
    private router: Router,
    private elementRef: ElementRef,
    @Optional() public app: AppComponent
  ) {}

  ngOnInit() {
    // Synchronize initial dark mode state from document.body
    this.isDarkMode = document.body.classList.contains('dark-theme');

    // Build the searchable components list from constants
    this.searchableComponents = Object.keys(COMPONENT_GROUP_MAP)
      .sort((a, b) => a.localeCompare(b))
      .map(name => ({
        name,
        category: COMPONENT_GROUP_MAP[name],
        icon: COMPONENT_ICON_MAP[name] || 'collection',
        desc: COMPONENT_DESC_MAP[name] || 'Reusable UI component'
      }));
  }

  @HostListener('document:keydown', ['$event'])
  public handleGlobalKeydown(event: KeyboardEvent) {
    // Cmd + K or Ctrl + K shortcut to focus search
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.searchInputRef?.nativeElement.focus();
      this.openDropdown();
    }
  }

  @HostListener('document:click', ['$event'])
  public handleOutsideClick(event: MouseEvent) {
    if (
      this.searchContainerRef &&
      !this.searchContainerRef.nativeElement.contains(event.target)
    ) {
      this.closeDropdown();
    }
  }

  public onLogoClick() {
    this.logoClick.emit();
    this.router.navigate(['/components']);
  }

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    if (this.app) {
      this.app.setDarkMode(this.isDarkMode);
    }
    this.toggleTheme.emit(this.isDarkMode);
    this._cdr.detectChanges();
  }

  public onComponentClick() {
    this.componentClick.emit();
  }

  public onSearchFocus() {
    this.openDropdown();
  }

  public onSearchInput() {
    this.filterComponents();
    this.openDropdown();
  }

  public filterComponents() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      // Default: show popular / first 8 components
      this.filteredResults = this.searchableComponents.slice(0, 8);
    } else {
      this.filteredResults = this.searchableComponents.filter(item => {
        return (
          item.name.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query)
        );
      }).slice(0, 10);
    }
    this.selectedIndex = this.filteredResults.length > 0 ? 0 : -1;
  }

  public openDropdown() {
    this.filterComponents();
    this.isDropdownOpen = true;
    this._cdr.detectChanges();
  }

  public closeDropdown() {
    this.isDropdownOpen = false;
    this.selectedIndex = -1;
    this._cdr.detectChanges();
  }

  public clearSearch(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.searchQuery = '';
    this.filterComponents();
    this.searchInputRef?.nativeElement.focus();
  }

  public onSearchKeydown(event: KeyboardEvent) {
    if (!this.isDropdownOpen) {
      if (event.key === 'ArrowDown' || event.key === 'Enter') {
        this.openDropdown();
        return;
      }
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.filteredResults.length > 0) {
          this.selectedIndex = (this.selectedIndex + 1) % this.filteredResults.length;
          this.scrollActiveIntoView();
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.filteredResults.length > 0) {
          this.selectedIndex =
            (this.selectedIndex - 1 + this.filteredResults.length) %
            this.filteredResults.length;
          this.scrollActiveIntoView();
        }
        break;

      case 'Enter':
        event.preventDefault();
        if (this.selectedIndex >= 0 && this.selectedIndex < this.filteredResults.length) {
          this.onSelectResult(this.filteredResults[this.selectedIndex]);
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.closeDropdown();
        this.searchInputRef?.nativeElement.blur();
        break;
    }
  }

  private scrollActiveIntoView() {
    setTimeout(() => {
      const activeEl = document.querySelector('.search-result-item.highlighted');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  public onSelectResult(item: HeaderSearchResult) {
    this.closeDropdown();
    this.searchQuery = '';
    this.selectComponent.emit(item.name);

    if (!this.router.url.includes('/components')) {
      this.router.navigate(['/components']).then(() => {
        // Handled by GuidelineComponent on route load
      });
    }
  }
}
