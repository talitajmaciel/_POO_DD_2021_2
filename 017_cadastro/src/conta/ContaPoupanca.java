package conta;

public class ContaPoupanca extends Conta { 
		protected float rendimento;
	
		public ContaPoupanca(int id, String clienteId) {
			super(id, clienteId);
			this.type = "CP";
			
		}

		public void atualizacaoMensal() {
		    this.rendimento = saldo * 0.01f;
		    saldo+=rendimento;
		
		}
	}

