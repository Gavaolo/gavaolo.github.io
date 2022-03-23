function checkCashRegister(price, cash, cid) {
    
  let change = cash-price

  var localCid = cid.map(function(arr) {return arr.slice()})
  
  while((change >= 100) && (localCid[8][1] >= 100)){
    change = change - 100
    localCid[8][1]=(localCid[8][1]-100).toFixed(0)
    }
  while((change >= 20) && (localCid[7][1] >= 20)){
    change = change - 20
    localCid[7][1] = (localCid[7][1] - 20).toFixed(0)
    }
  while((change >= 10) && (localCid[6][1] >= 10)){
    change = change - 10
    localCid[6][1] = (localCid[6][1] - 10).toFixed(2)
    }
  while((change >= 5) && (localCid[5][1] >= 5)){
    change = change - 5
    localCid[5][1] = (localCid[5][1] - 5).toFixed(0)
    }
  while((change >= 1) && (localCid[4][1] >= 1)){
    change = change - 1
    localCid[4][1] = (localCid[4][1] - 1).toFixed(2)
    }
  while((change >= 0.25) && (localCid[3][1] >= 0.25)){
    change = (change - 0.25).toFixed(2)
    localCid[3][1] = (localCid[3][1] - 0.25).toFixed(2)
    }
  while((change >= 0.10) && (localCid[2][1] >= 0.10)){
    change = (change - 0.10).toFixed(2)
    localCid[2][1] = (localCid[2][1] - 0.10).toFixed(2)
    }
  while((change >= 0.05) && (localCid[1][1] >= 0.05)){
    change = (change - 0.05).toFixed(2)
    localCid[1][1] = (localCid[1][1] - 0.05).toFixed(2)
    }
  while((change >= 0.01) && (localCid[0][1] >= 0.01)){
    change = (change - 0.01).toFixed(2)
    localCid[0][1] = (localCid[0][1] - 0.01).toFixed(2)
    }

  if(change > 0) return {status:"INSUFFICIENT_FUNDS", change: []}
  if(localCid.every(cash => cash[1] == 0)) return {status:"CLOSED", change: cid}
 
  let rest = []

  for(let i = 0; i < cid.length; i++){
    if(cid[i][1] != localCid[i][1])rest.push([cid[i][0],parseFloat((cid[i][1] - localCid[i][1]).toFixed(4))])
  }

  return {status:"OPEN", change: rest.reverse()}

}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
