import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefilter'
})
export class DatefilterPipe implements PipeTransform {

  transform(accounts: any, args?: any): any {

    if (!args) {
      return accounts;
    }

    console.log(args.formatted);
    console.log(args.formatted.substr(6, 4) + '-'
      + args.formatted.substr(3, 2) + '-' + args.formatted.substr(0, 2));

    // tslint:disable-next-line:prefer-const
    let dateFormated = args.formatted.substr(6, 4) + '-'
      + args.formatted.substr(3, 2) + '-' + args.formatted.substr(0, 2);

    return accounts.filter(account => {
      console.log(account.createdAt);
      return account.createdAt.includes(dateFormated);
    });

  }

}
