# Árvores da Amazonia
Tarefa sobre o padrão de projeto Flyweight

## Integrantes

Icaro Cavalcante Lopes
Matheus de Souza Kawasaki Campos

## Uso de Memória

Para 20 espécies de árvores, cada uma com uma variante padrão e outra queimada, são criados apenas 40 objetos TreeSpecies, independentemente do número de árvores renderizadas.

Com uma estimativa de 120 bytes por objeto de TreeSpecies, temos que são utilizados 4.8KB com flyweight. Porém sem ele o custo para 1000 árvores renderizadas seria de 120KB, e ainda se fossem renderizadas 100000 árvores o custo seria 12000KB, demonstrando a grande eficiência do padrão flyweight.