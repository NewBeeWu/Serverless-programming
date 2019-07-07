# TimerTrigger - JavaScript

The `TimerTrigger` makes it incredibly easy to have your functions executed on a schedule. This sample demonstrates a simple use case of calling  function every weekday at noon

## How it works

For a `TimerTrigger` to work, you provide a schedule in the form of a [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression)(See the link for full details). A cron expression is a string with 6 separate expressions which represent a given schedule via patterns. The pattern we use to represent every weekday at noon is `0 0 12 * * MON-FRI`. This, in plain text, means: "When seconds is equal to 0, minutes is equal to 0, for any weekday of the month, month, day of the week, or year".

## Learn more

<TODO> Documentation
