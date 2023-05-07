for (let i = 2; i <= 1000; i++) {
    let primo = i
    
    for (let num = 2; num < i; num++) {
      if (i % num === 0) {
        primo = false
        break;
      }
    }
    
    if (primo) {
      console.log(i)
    }
  }
  