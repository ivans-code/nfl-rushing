import { Component, OnInit, Input } from '@angular/core';
import { PlayerStat } from '../../models/player-stat';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss']
})
export class StatsTableComponent implements OnInit {
  displayedColumns: string[] = ['Player', 'Team', 'Pos', 'Yds', '1st', '1st%', '20+', '40+', 'Att', 'AttPG', 'Avg',
    'Fum', 'Lng', 'TD', 'YdsPG', 'LngIsTD'];

  @Input()
  data: PlayerStat[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
