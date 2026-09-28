# Block comment

"""
Docstring de módulo.
Ejemplo para prueba.
"""

import asyncio
import functools
import re
from typing import Any, Callable, ClassVar, Final, Generic, Optional, Self, TypeVar, Union

# Constantes y variables globales (Capitalized, Final, separadores numéricos)
GLOBAL_CONST: Final[str] = "https://example.com/api?v=1\n\x41"  # Escapes y URL
_unexported_var: int = 10_000
HEX_NUM = 0xFF00AA
FLOAT_NUM = 3.14159e-2
COMPLEX_NUM = 2 + 3j
BYTES_LITERAL = b"binary\x00data"
RAW_STRING = r"Raw string \n sin escapar"

# Type Variables y sintaxis de tipos (Python 3.12+ 'type' soft keyword)
T = TypeVar("T", int, float)
type Vector[T] = list[T]  # Alias de tipo explícito


# Metaclase personalizada
class CustomMeta(type):
    def __init__(cls, name: str, bases: tuple[type, ...], dct: dict[str, Any]) -> None:
        super().__init__(name, bases, dct)


# Decorador personalizado con envoltorio y genéricos
def log_execution(prefix: str = "LOG"):
    def decorator[R](func: Callable[..., R]) -> Callable[..., R]:
        @functools.wraps(func)
        def wrapper(*args: Any, **kwargs: Any) -> R:
            print(f"[{prefix}] Ejecutando {func.__name__}")
            return func(*args, **kwargs)

        return wrapper

    return decorator


# Clase base con @property, @classmethod, @staticmethod y dunders
class BaseProcessor(metaclass=CustomMeta):
    CLASS_ATTR: ClassVar[int] = 100
    __slots__ = ("_id", "is_active")

    def __init__(self, processor_id: int) -> None:
        self._id: int = processor_id
        self.is_active: bool = True

    @property
    def id(self) -> int:
        return self._id

    @classmethod
    def create_default(cls) -> Self:
        return cls(1)

    @staticmethod
    def validate(value: Any) -> bool:
        return isinstance(value, (int, float))


# Clase genérica con herencia múltiple
class DataWorker(BaseProcessor, Generic[T]):
    def __init__(self, worker_id: int, initial_data: list[T]) -> None:
        super().__init__(worker_id)
        self.data: list[T] = initial_data

    @log_execution(prefix="WORKER")
    async def process_async(self, multiplier: T) -> list[T]:
        await asyncio.sleep(0.01)

        # List comprehension, operador walrus y F-strings avanzadas
        result = [x * multiplier for x in self.data if x is not None]
        status_msg = f"Procesados {len(result)} elementos | ID: {self.id=:.2f}"
        print(status_msg)
        return result

    def __enter__(self) -> Self:
        return self

    def __exit__(self, exc_type: Any, exc_val: Any, exc_tb: Any) -> bool:
        return False


# Función principal con control de flujo, pattern matching y excepciones
async def main() -> None:
    """Función principal"""
    # Operador walrus (:=)
    if (count := len([1, 2, 3])) > 0:
        print(f"Cantidad: {count}")

    # Pattern Matching / Switch (Soft keywords: match, case)
    command: Union[str, tuple[str, int]] = ("move", 42)
    match command:
        case "quit":
            print("Saliendo")
        case ("move", distance) if distance > 0:
            print(f"Moviendo {distance} unidades")
        case _:
            print("Comando desconocido")

    # Manejo de excepciones (try / except / else / finally)
    try:
        worker = DataWorker(worker_id=42, initial_data=[1, 2, 3])
        async with worker:
            res = await worker.process_async(multiplier=2)
    except ValueError as err:
        print(f"Error de validación: {err}")
    except Exception as e:
        raise RuntimeError("Procesamiento fallido") from e
    else:
        print("Completado con éxito")
    finally:
        pass

    # Lambdas y Dict Comprehensions
    square = lambda x: x**2
    matrix = {i: square(i) for i in range(5)}

    # Ámbitos: nonlocal y global
    outer_var = 10

    def inner_func():
        nonlocal outer_var
        outer_var += 5

    inner_func()


if __name__ == "__main__":
    asyncio.run(main())
