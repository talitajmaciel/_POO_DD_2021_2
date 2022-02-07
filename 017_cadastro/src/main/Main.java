package main;

import agencia.Agencia;
import conta.Conta;

public class Main {
public static void main(String[] args) {
    	
    
    	Agencia agencia = new Agencia();
    	agencia.addCliente("Almir");
    	agencia.addCliente("Julia");
    	agencia.addCliente("Maria");
    	System.out.println(agencia);

    	/*
    	 0:Almir:0.00:CC
         1:Almir:0.00:CP
         2:Julia:0.00:CC
         3:Julia:0.00:CP
         4:Maria:0.00:CC
         5:Maria:0.00:CP
    	 */
    	System.out.println("--------------------------------------------");
    	
    	agencia.getConta(0).depositar(100);
    	agencia.getConta(1).depositar(200);
    	agencia.getConta(2).depositar(50);
    	agencia.getConta(3).depositar(300);
    	
    	agencia.getConta(3).sacar(50);
    	agencia.getConta(0).sacar(70);
    	agencia.getConta(1).sacar(300);
    	// fail: saldo insuficiente
    	
    	System.out.println(agencia);
    	
    	/*
    	0:Almir:30.00:CC
        1:Almir:200.00:CP
        2:Julia:50.00:CC
        3:Julia:250.00:CP
        4:Maria:0.00:CC
        5:Maria:0.00:CP 
         */
    	System.out.println("--------------------------------------------");
    	
    	Conta conta1 = agencia.getConta(3);
		Conta conta2 = agencia.getConta(5);
		if(conta1 != null && conta2 != null) {
		    conta1.transferir(conta2, 200);
		}
		
		conta1 = agencia.getConta(0);
		conta2 = agencia.getConta(4);
		if(conta1 != null && conta2 != null) {
		    conta1.transferir(conta2, 25);
		}
		
		conta1 = agencia.getConta(9);
		// fail: conta nao encontrada
		conta2 = agencia.getConta(1);
		if(conta1 != null && conta2 != null) {
		    conta1.transferir(conta2, 30);
		}
		
		conta1 = agencia.getConta(2);
		conta2 = agencia.getConta(8);
		// fail: conta nao encontrada
		if(conta1 != null && conta2 != null) {
		    conta1.transferir(conta2, 10);
		}
		System.out.println(agencia);
		
		/*
		0:Almir:5.00:CC
		1:Almir:200.00:CP
		2:Julia:50.00:CC
		3:Julia:50.00:CP
		4:Maria:25.00:CC
		5:Maria:200.00:CP
		*/
		System.out.println("--------------------------------------------");

    	for(Conta conta: agencia.getContas()) {
    	conta.atualizacaoMensal();
    	}
    	System.out.println(agencia);
    	
    	/*
    	0:Almir:-15.00:CC
		1:Almir:202.00:CP
		2:Julia:30.00:CC
		3:Julia:50.50:CP
		4:Maria:5.00:CC
		5:Maria:202.00:CP
    	 */
    	
    	
    
      
}
}