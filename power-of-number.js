function powerfn(base, power) {
    if(power ==0){
    return 1;
    }
    return base*powerfn(base,power -1 );//2*power(2,1), 2*
    
    }
    
    
    
    powerfn(2, 3)