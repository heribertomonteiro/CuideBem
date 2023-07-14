function deletar(event){
    console.log("vei")
    console.log(event.target.name)
    fetch(`http://localhost:3000/delete/${event.target.name}`, {
        method: 'DELETE',
    })
    window.location.reload()
}