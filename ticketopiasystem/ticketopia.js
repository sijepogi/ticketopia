const Ticketopia = {
    ticketCounter: 1000,
    tickets: [],
    totalSales: 0,

    register: function(){
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let college = document.getElementById("college").value;
        let event = document.getElementById("event").value;
        let seat = document.getElementById("seatType");

        if(name==="" || age==="" || college==="" || event===""){
            alert("Please fill all fields");
            return;
        }

        this.ticketCounter++;
        let price = parseInt(seat.value);
        let seatName = seat.options[seat.selectedIndex].text;

        let ticket = { ticketNumber: this.ticketCounter, name, age, college, event, seat: seatName, price };
        this.tickets.push(ticket);
        this.totalSales += price;

        const output = document.getElementById("registerOutput");
        output.innerHTML = `Ticket #: ${ticket.ticketNumber}<br>
                            Name: ${ticket.name}<br>
                            College: ${ticket.college}<br>
                            Event: ${ticket.event}<br>
                            Seat: ${ticket.seat}<br>
                            Price: ₱${ticket.price}`;
        output.classList.add("show");
    },

    loginUser: function(){
        let search = parseInt(document.getElementById("ticketNumberInput").value);
        let found = this.tickets.find(t => t.ticketNumber === search);

        const output = document.getElementById("loginOutput");
        if(found){
            output.innerHTML = `Welcome ${found.name}<br>
                                College: ${found.college}<br>
                                Event: ${found.event}<br>
                                Seat: ${found.seat}`;
        } else {
            output.innerHTML = "Ticket not found";
        }
        output.classList.add("show");
    },

    loginAdmin: function(){
        let user = document.getElementById("adminUser").value;
        let pass = document.getElementById("adminPass").value;

        const output = document.getElementById("adminOutput");
        if(user==="admin" && pass==="admin"){
            if(this.tickets.length===0){
                output.innerHTML = "No tickets registered.";
                output.classList.add("show");
                return;
            }

            let list = "<strong>All Tickets:</strong><br><br>";
            this.tickets.forEach(t=>{
                list += `Ticket #: ${t.ticketNumber} | ${t.name} | ${t.college} | ${t.event} | ${t.seat} | ₱${t.price}<br>`;
            });
            list += `<br><strong>Total Sales: ₱${this.totalSales}</strong>`;
            output.innerHTML = list;
        } else {
            output.innerHTML = "Wrong credentials";
        }
        output.classList.add("show");
    }
};

function showSection(sectionId){
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
}