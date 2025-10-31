import math
from dataclasses import dataclass

CONSTANT = math.pi
strings = "This is a string"  # comment
fstring = f"Test: '{strings}'\n"
booleans_none = {"true": True, "false": False, "none": None}
operations: bool = 12 > 2 and 23 == 23 < 100 + 12 * 2 / 2
tupla = (23, ...)
lista = [12, "3", "fdgs"]


def function(num1: int, num2: int) -> float | None:
    """Function that receives two integers to divide them"""
    x = 0
    if num2 > x:
        return num1 / num2


a = {2, 3, 4}

function(num1=12, num2=2)  # comment


class Person:
    def __init__(self, name: str) -> None:
        self.name = name


class User(Person, object):
    def generate_password(self) -> str:
        return self.name[::-1]

    @classmethod
    def salary(cls):
        print("hey")


user = User("Python")


@dataclass(frozen=True)
class BaseModel:
    name: str
    lastname: str | None = None
