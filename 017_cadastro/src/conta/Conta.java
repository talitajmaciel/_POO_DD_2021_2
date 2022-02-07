package conta;

public class Conta {
 
	protected int id;
	protected float saldo;
	protected String idClient;
	protected String type;

	public Conta(int id, String idClient) {
		this.id = id;
		this.idClient = idClient;
		this.saldo = 0;
		this.type = "";
	}
	
	public void sacar(float value) {
		if(saldo >= value) {
		this.saldo -= value;
			
		}else {
			System.out.println("fail: saldo insuficiente");
		}
	}

	public void depositar(float value) {
		if(value != 0) {	
		this.saldo += value;
		
		}else {
			System.out.println("fail: valor insuficiente para o deposito");
		}
	}
	
	public void transferir(Conta ContaDestino, float value) {
		
		this.saldo -= value;
		ContaDestino.saldo+=value;
	}

	public float getSaldo() {
		return saldo;
	}

	public String getIdClient() {
		return idClient;
	}

	public String getType() {
		return type;
	}
	
	public int getId() {
		return id;
	}
	
	public void atualizacaoMensal() {
		
	}

	public String toString() {
		return this.id + ":" + this.idClient + ":" + this.saldo + ":" + this.type;
	}
	
}
