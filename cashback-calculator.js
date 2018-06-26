#!/usr/bin/env node

const logic = require('./lib/logic');
const program = require('commander');

program
  .command('signup <site>')
  .description('Get signup bonus amount')
  .action(site => {
    logic.getSignupBonus(site, function(err, data){
      if(err) {console.log(err); return;}
      console.log('Award bonus: ' + data);
    });
  });

program
  .command('spend <amount> [<amount>...]')
  .description('Get cashback amount')
  .action((amount, amounts) => {
    amounts.push(amount);
    logic.getSpendAmt(amounts, function(err, data){
      if(err) {console.log(err); return;}
      console.log('Award cashback: ' + data);

    });
  });

program
  .command('redeem <domain>')
  .description('Get redeem redirection link')
  .action(domain => {
    logic.getRedeemRedirectLink(domain, function(err, data){
      if(err) {console.log(err); return;}
      console.log('Visit ' + data + ' to start earning cashback!');
    });
  });

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}
program.parse(process.argv)
