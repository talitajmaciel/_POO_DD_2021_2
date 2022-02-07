public class Client {
   
    private String id;
    private String fone;

    public Client(String id, String fone){
        this.id = id;
        this.fone = fone;
    }

    public String getFone() {
        return fone;
    }

    public String getId() {
        return id;
    }

    @Override
    public String toString() {
        return id + ":" + fone;
    }
    
}

public class Sala {
    
    private LinkedHashMap<string, Client> clients;

    public Sala(int size){
        this.clients = new LinkedHashMap<string, Client>(Collections.nCopies(size, null));
    }

    public boolean reserve(String id, String fone, int index){
        if(index > clients.size() || index < 0){
            System.out.println("Assento - " + index + " nao sai");
            return false;
        }
        if(clients.get(index) != null){
            System.out.println("Assento ocupado");
            return false;
        }
        for(Client client : clients){
            if(client != null && client.getId().equals(id)){
                System.out.println("Este Id ja saiu...tente novamente");

                return false;
            }
        }
        Client c = new Client(id, fone);
        clients.set(index, c);
        return true;
    }

    public boolean cancel(String id){
        
        for(int i=0;i<clients.size();i++){
            if(clients.get(i) != null && clients.get(i).getId().equals(id)){
                clients.set(i, null);
                return true;
            }
        }
        System.out.println("Id nao encontrado.");
        return false;
    }

    @Override
    public String toString() {
        String list = "["; 

        for(Client client : clients){
            if(client == null){
                list += " - ";
            }else{
                list += client.toString() + " ";
            }
        }

        list += "]";
        return list;
    }
}

public class Aplication {
    
    public static void main(String[] args) {
        
        Sala sala = new Sala(0);

        Scanner sc = new Scanner(System.in);

        while(true){
            String line = sc.nextLine();
            String[] usrIn = line.split(" ");
            if(usrIn[0].equals("init")){
                int size = Integer.parseInt(usrIn[1]);
                sala = new Sala(size);
            }else if(usrIn[0].equals("reserve")){
                String id = usrIn[1];
                String fone = usrIn[2];
                int index = Integer.parseInt(usrIn[3]);
                sala.reserve(id, fone, index);
            }else if(usrIn[0].equals("cancel")){
                String id = usrIn[1];
                sala.cancel(id);
            }else if(usrIn[0].equals("show")){
                System.out.println(sala);
            }else if(usrIn[0].equals("end")){
                break;
            }else{
                System.out.println("Comando invalido...");
            }
        }

        sc.close();
    }
}