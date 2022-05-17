const duel2 = (joueur1,joueur2) => {

    console.log(joueur1)
    console.log(joueur2)
    let winner = "Le winner est "
    if (joueur1 === joueur2)
        resultat = null;
    else if ((joueur1 === "Pierre" && joueur2 === "Ciseaux") || (joueur1 === "Feuille" && joueur2 === "Pierre") || (joueur1 === "Ciseaux" && joueur2 === "Feuille"))
        resultat = true;
        
    else
        resultat = false;
 
    return (resultat)
}


module.exports={duel2}
