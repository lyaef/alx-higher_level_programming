#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    Newmatrix = []
    i = 0
    for x in matrix:
        Newmatrix.append([])
        for y in matrix[i]:
            Newmatrix[i].append(y**2)
        i += 1
    return (Newmatrix)
