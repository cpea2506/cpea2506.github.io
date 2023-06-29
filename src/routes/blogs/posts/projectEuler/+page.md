---
title: Project Euler
description: Project Euler in Rust
date: 30/06/2023
---

## 1. Preparation:

```rust
use std::time::{Duration, Instant};

#[doc(hidden)]
pub fn __get_time<T>(func: impl FnOnce() -> T) -> (T, Duration) {
    let start = Instant::now();
    let result = func();
    let time = start.elapsed();

    (result, time)
}

#[macro_export]
macro_rules! run {
    ($name:expr, $solution:expr) => {
        use humantime::format_duration;
        use owo_colors::OwoColorize;

        fn main() {
            let (solution, time) = $crate::__get_time(|| $solution);

            println!(
                "{name}: {solution} in {time}",
                name = $name,
                solution = solution.fg_rgb::<255, 63, 128>(),
                time = format_duration(time).fg_rgb::<101, 252, 218>(),
            );
        }
    };
}

#[macro_export]
macro_rules! test {
    ($mod_name:ident{$({$test_name:ident, $fun:expr, $answer:expr}),+}) => {
        #[cfg(test)]
        mod $mod_name {
            use super::*;

            $(
                #[test]
                #[allow(clippy::bool_assert_comparison)]
                fn $test_name() {
                    assert_eq!($fun, $answer);
                }
            )+
        }
    };
}
```

## 2. Problems:

-   Problem 15

> Starting in the top left corner of a `2x2` grid, and only being able to move to
> the right and down, there are exactly 6 routes to the bottom right corner. How
> many such routes are there through a `20x20` grid?

Interesting this problem can be convert to:

> Count the number of way to choose 20 routes from a set of 40 routes of a 20x20 grid. This forms the binomial coefficient `C(40, 20)`

```rust
// Lattice Paths

use std::borrow::BorrowMut;

trait Math {
    fn doubled(self) -> Self;
}

impl Math for usize {
    fn doubled(self) -> Self {
        self * 2
    }
}

struct BinomialCoefficient {
    n: usize,
    k: usize,
}

impl BinomialCoefficient {
    fn new(n: usize, k: usize) -> Self {
        assert!(n > k, "n must be larger than k");

        Self { n, k }
    }

    /// Get the number of ways to choose an (unordered)
    /// subset of `k` elements from a fixed set of `n` elements
    fn value(self) -> usize {
        let mut n = self.n;

        (1..=self.k).borrow_mut().fold(1, |mut acc, k| {
            acc *= n;
            n -= 1;

            acc / k
        })
    }
}

fn lattice_path_counter(grid_size: usize) -> usize {
    BinomialCoefficient::new(grid_size.doubled(), grid_size).value()
}

pj_euler::run!("Lattice Paths", lattice_path_counter(20));
pj_euler::test!(
    lattice_paths {
        {grid_size_2_have_6_paths, lattice_path_counter(2), 6}
    }
);
```
