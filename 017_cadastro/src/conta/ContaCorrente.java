package conta;

public class ContaCorrente extends Conta{
	
	public ContaCorrente(int id, String clienteId) {
		super(id, clienteId);
		this.type = "CC";
	}

	public void atualizacaoMensal() {
		saldo -= 20;
		
	}
}


