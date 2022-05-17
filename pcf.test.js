const {duel2}=require('./pfc');



test('Egalité', () => {
    expect(duel2("Pierre","Pierre")).toBe(null);
});

test('Perdant', () => {
    expect(duel2("Pierre","Feuille")).toBe(false);
});


test('Gagnant', () => {
    expect(duel2("Ciseaux","Feuille")).toBe(true);
});

