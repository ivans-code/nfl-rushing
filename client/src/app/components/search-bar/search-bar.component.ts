import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { NflStatsApiService } from 'src/app/services/nfl-stats-api.service';
import { PlayerStat } from '../../models/player-stat';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl();
  sortOptions = ['Yds', 'Lng', 'TD'];
  sortControl = new FormControl(this.sortOptions[0]);
  playerSuggestions: Observable<PlayerStat[]>;
  searchData: any[] = [];

  constructor(private nflStatsService: NflStatsApiService) {
    this.search();
  }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(input => {
      this.playerSuggestions = this.nflStatsService.getRushingStats({ filter: input });
    })

    this.sortControl.valueChanges.subscribe(_ => {
      this.nflStatsService.getRushingStats(this.getParams()).subscribe(stats => {
        this.searchData = stats;
      });
    })

  }

  getParams() {
    const params = {}
    if (this.sortControl.value) {
      params['sort'] = this.sortControl.value
    }
    if (this.searchControl.value) {
      params['filter'] = this.searchControl.value
    }
    return params;

  }

  search() {
    this.playerSuggestions = null;
    this.nflStatsService.getRushingStats(this.getParams()).subscribe(stats => {
      this.searchData = stats;
    });
  }


  // TODO move the download functionality to a service
  downloadCSV() {
    const rawCSV = this.flatObjectListToCSV(this.searchData);
    const blob = new Blob([rawCSV], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  flatObjectListToCSV(objArray: any[]): string {
    let rawCSV = '';
    let headerRow = '';

    Object.keys(objArray[0]).forEach(columnName => {
      headerRow += columnName + ',';
    })
    //remove last comma
    headerRow = headerRow.slice(0, -1);

    rawCSV += headerRow + '\r\n';

    objArray.forEach(obj => {
      let row = '';
      Object.keys(obj).forEach(key => {
        if (row) {
          row += ',';
        }
        row += obj[key];
      })
      rawCSV += row + '\r\n';
    })

    return rawCSV
  }

}