package agencia;

import java.util.ArrayList;

import conta.Cliente;
import conta.Conta;
import conta.ContaCorrente;
import conta.ContaPoupanca;

public class Agencia{
	protected ArrayList<Cliente> clientes; 
	protected ArrayList<Conta> contas;

	public Agencia() {
		clientes = new ArrayList<Cliente>();
		contas = new ArrayList<Conta>();	
	}
	
	public void addCliente(String id){
		
		Conta corrente = new ContaCorrente(this.contas.size(), id); 
		Conta poupanca = new ContaPoupanca(this.contas.size(), id); 	 
		Cliente cliente  = new Cliente(id);
		
		clientes.add(cliente); // adicionar cliente no id
		contas.add(corrente);  //  adicionar contaCorrente no id
		contas.add(poupanca); // adicionar contaPoupanca no id
		
	}
	
	public Conta getConta(int id) {
		if(id > this.contas.size()) {
			System.out.println("fail: conta nao encontrada");
			return null;
		}
		return contas.get(id);	
	}
	
	public ArrayList <Conta> getContas(){
		return contas;
	}
	
	public String toString() {
	    String saida = "";
	    for(Conta conta : contas){
	    	saida += contas.indexOf(conta) + ":" + conta.getIdClient() + ":" + conta.getSaldo() + ":" +conta.getType() + "\n";
	    }
		return saida;
	}
	
}
