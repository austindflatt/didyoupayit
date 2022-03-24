import React from 'react';
import { createStyles, Container, Group, Anchor } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>
          <Anchor
          color="dimmed"
          key={null}
          href={null}
          onClick={(event) => event.preventDefault()}
          size="sm"
          >
          About
          </Anchor>
          <Anchor
          color="dimmed"
          key={null}
          href={null}
          onClick={(event) => event.preventDefault()}
          size="sm"
          >
          Source Code
          </Anchor>
        </Group>
      </Container>
    </div>
  );
}