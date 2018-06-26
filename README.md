# CashbackCalculator

Simple cashback calculator for the e-commerce shops

Scripts include following features:

1. signup domain

    Award corresponding bonus amount with currency
  
    | Domain                | Bonus amount |
    | ----------------------|:------------:|
    | www.shopback.sg       | SGD 5        |
    | www.shopback.my       | MYR 10       |
    | www.shopback.co.id    | IDR 25.000   |
    | www.shopback.com.tw   | TWD 1000     |
    | www.myshopback.co.th  | THB 500      |
    | www.shopback.com      | USD 5        |
    | www.shopback.com.au   | AUD 5        |

2. spend amount [amount...]

    Return cashback awarded rounded to 2 decimal places. The business logic is such:
    a. award 20% of the highest amount if all amounts are >= 50
    b. award 15% of the highest amount if all amounts are >= 20
    c. award 10% of the highest amount if all amounts are >= 10
    d. award 5% of the highest amount as cashback
  
3. redeem domain

      Direct user to visit corresponding websites

    | Domain                | Website                       |
    | ----------------------|:-----------------------------:|
    | www.shopback.sg       | https://www.shopback.sg       |
    | www.shopback.my       | https://www.shopback.my       |
    | www.shopback.co.id    | https://www.shopback.co.id    |
    | www.shopback.com.tw   | https://www.shopback.com.tw   |
    | www.myshopback.co.th  | https://www.myshopback.co.th  |
    | www.shopback.com      | https://www.shopback.com      |
    | www.shopback.com.au   | https://www.shopback.com.au   |


## Getting Started

### Prerequisites

```
Node
```

### Installing

```
git clone https://github.com/yelinag/CashbackCalculator.git
cd CashbackCalculator
npm install
```

### Running the script

```
node cashback-calculator.js <action> <arg1> [<arg2> …]
1. signup <domain>
2. spend <amount> [<amount>...]
3. redeem <domain>
```

Few examples
```
$ node cashback-calculator.js signup www.shopback.sg
Award bonus: 5.00 SGD
$ node cashback-calculator.js signup www.shopback.my
Award bonus: 10.00 MYR
$ node cashback-calculator.js spend 0
No cashback
$ node cashback-calculator.js spend 20
Award cashback: 3.00
$ node cashback-calculator.js spend 100 5
Award cashback: 5.00
$ node cashback-calculator.js spend 10 10 10
Award cashback: 1.00
$ node cashback-calculator.js spend 20 10 15
Award cashback: 2.00
$ node cashback-calculator.js redeem www.shopback.sg
Visit https://www.shopback.sg to start earning cashback!
$ node cashback-calculator.js redeem www.shopback.my
Visit https://www.shopback.my to start earning cashback!
```

## Authors

* **Ye Lin Aung**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
