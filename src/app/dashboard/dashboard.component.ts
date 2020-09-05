import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name = "James Smithson";

  headers = ["PORTFOLIO MODEL", "CURRENT MV", "↑↓"];
  rows = [
    {
      "PORTFOLIO_MODEL" : "AB Global Divercified - Balenced | EUR²",
      "CURRENT_MV" : "3.8M",
      "UPDOWN" : "down"
    },
    {
      "PORTFOLIO_MODEL" : "Global Exposure - Concervative | GBP²",
      "CURRENT_MV" : "2.5M",
      "UPDOWN" : "down"
    },
    {
      "PORTFOLIO_MODEL" : "Global Exposure - Concervative USD²",
      "CURRENT_MV" : "2.1",
      "UPDOWN" : "up"
    }
  ]

  article = {
      "title":"Is the trade War a Blessing in Disguise for China's Sector?",
      "writer":"Alliance Bernstein",
      "content":"Complex ties between US and Chinese technology sectors are being tested by trade war tensions. But some steps taken by the US against Chinese multinational giant Huawei Technologies could backfire and spark a new phase of development for the Chinese.",
      "adress":"APAC"
  }

  strategiesBadge = 5;
  portfolioBadge = 12;
  assestBadge = 10;


  constructor() { }

  ngOnInit() {
  }

}
